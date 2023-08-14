# authentication/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('register', views.Register.register, name='register'),
    path('login',views.Login.login, name='login'),
    path('getMovieData',views.GetDataFromApi.get_data, name='get_data')
]
