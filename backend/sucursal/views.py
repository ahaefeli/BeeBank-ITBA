from django.shortcuts import render
from rest_framework import generics
from .models import Sucursal
from .serializer import ShowBranchesSerializer
from rest_framework.permissions import AllowAny 

class ShowBranchesView(generics.ListCreateAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = ShowBranchesSerializer
    permission_classes = [AllowAny]