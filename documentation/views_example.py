# Archivo de views sacado de clase para tener de referencia vistas hechas
# Eliminar antes de entregar

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, permissions

from .models import Libro
from .serializers import LibroSerializer, UserSerializer

from django.contrib.auth.models import User

#http://127.0.0.1:8000/api/libros/
class LibroLists(APIView):
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    def post(self, request, format = None):
        serializer = LibroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner = request.user)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        libros = Libro.objects.all().order_by("created_at")
        seralizer = LibroSerializer(libros,many=True)
        return Response(seralizer.data, status=status.HTTP_200_OK)

# http://127.0.0.1:8000/api/libros/12/   
class LibroDetail(APIView):
    permission_classes=[permissions.IsAuthenticated]

    def get(self, request,pk):
        libro = Libro.objects.filter(pk=pk).first()
        if libro:
            serializer = LibroSerializer(libro)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response("ID not found", status = status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, pk):
        libro = Libro.objects.filter(pk=pk).first()
        serializer = LibroSerializer(libro)
        if libro:
            libro.delete()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self,request, pk):
        libro = Libro.objects.filter(pk=pk).first()
        serializer = LibroSerializer(libro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class=UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

