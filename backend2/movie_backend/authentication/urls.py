# authentication/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('register', views.Register.register, name='register'),
    path('login',views.Login.login, name='login'),
    path('getMovieData',views.GetDataFromApi.get_data, name='get_data'),
    path('search-movies', views.SearchMovies.as_view(), name='search_movies'),
    path('favorite-movies', views.FavoriteMovieList.as_view(), name='favorite-movies'),
    path('favorite-movies/<int:user_id>', views.FavoriteMovieList.as_view(), name='favorite-movies'),
]
