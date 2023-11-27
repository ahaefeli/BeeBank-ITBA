from django.shortcuts import render
from rest_framework import generics
from .models import Sucursal
from .serializer import ShowBranchesSerializer


class ShowBranchesView(generics.ListCreateAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = ShowBranchesSerializer