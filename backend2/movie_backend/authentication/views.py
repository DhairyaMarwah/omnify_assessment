from rest_framework.response import Response
from rest_framework import status
from .models import User
from rest_framework.decorators import api_view
from passlib.hash import sha512_crypt as sha512
from .serializers import UserSerializer
import requests
import os
from dotenv import load_dotenv
load_dotenv()

class Login:
    @api_view(['POST'])
    def login(request):
        if "email" not in request.data and "password" not in request.data:
            return Response({"error": "Please provide both email and password"}, status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data["email"]
        password = request.data["password"]
        password = sha512.hash(password, rounds=5000,salt="Omnify")

        try:
            user = User.objects.get(email=email,password=password)
            user_serialized = UserSerializer(user)
            return Response(user_serialized.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        
class Register:
    @api_view(['POST'])
    def register(request):
        if "email" not in request.data and "password" not in request.data and "first_name" not in request.data and "last_name" not in request.data:
            return Response({"error": "Please provide all fields"}, status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data["email"]
        password = request.data["password"]
        password = sha512.hash(password, rounds=5000,salt="Omnify")
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]

        try:
            user = User.objects.get(email=email)
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            user = User.objects.create(email=email,password=password,first_name=first_name,last_name=last_name)
            user_serialized = UserSerializer(user)
            return Response(user_serialized.data, status=status.HTTP_201_CREATED)
        
class GetDataFromApi:
    @staticmethod
    def get_data(request):
        try:
            api_url = "https://api.themoviedb.org/3/movie/popular"
            api_key = '29d9c3e420b65d9f5e36861f0426614e'  # Update with your TMDb API key
            headers = {
                "accept": "application/json",
            }

            params = {
                'api_key': api_key,
            }

            response = requests.get(api_url, headers=headers, params=params)

            if response.status_code == status.HTTP_200_OK:
                data = response.json()
                print("data",data)
                response_data = {"data": data} 
                return Response(response_data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Failed to fetch data"}, status=response.status_code)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)