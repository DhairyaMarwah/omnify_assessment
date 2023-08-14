# authentication/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('register', views.Register.register, name='register'),
    path('login',views.Login.login, name='login'),
    path('getMovieData',views.GetDataFromApi.get_data, name='get_data'),
    path('search-movies', views.SearchMovies.as_view(), name='search_movies'),
    path('addFavorite', views.FavoriteMovieList.as_view(), name='addFavorite'),
    path('favorite-movies/<int:user_id>', views.FetchFavoriteMovieList.as_view(), name='favorite-movies'),
    path('fetchByGenre/<int:movie_id>', views.FetchSimilarMovies.as_view(), name='fetchByGenre'),
    path('genres', views.FetchMovieGenres.as_view(), name='genres'),
    path('category/<int:genre_id>', views.FetchMoviesByGenre.as_view(), name='category'),
]
