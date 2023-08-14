# authentication/serializers.py
from rest_framework import serializers
from .models import User,FavoriteMovie

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class MovieSerializer(serializers.Serializer):
    
    title = serializers.CharField()
    overview = serializers.CharField()

class FavoriteMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMovie
        fields = '__all__'