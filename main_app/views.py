# from django.shortcuts import render
from .models import Pokemon
from .serializers import PokemonSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def pokemon_list(request): 
    print("SEERRRRIALIZZZZZZZZRRRRRRR REEEEEQUEST", request.data)
    if request.method == "GET":
        pokemon = Pokemon.objects.all()
        serializer = PokemonSerializer(pokemon, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        # find or create!!!!!

        serializer = PokemonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("POST FAILURE")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def pokemon_detail(request, name):
    pokemon = Pokemon.objects.get(name=name)
    if request.method == "GET":
        serializer = PokemonSerializer(pokemon)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = PokemonSerializer(pokemon, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        pokemon.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
