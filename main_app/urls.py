# main_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('pokemon/', views.pokemon_list, name="pokemon_list"),
    path('pokemon/<name>/', views.pokemon_detail, name='pokemon_detail'),
]