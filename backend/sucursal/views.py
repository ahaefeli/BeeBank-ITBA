from django.shortcuts import render
from rest_framework import generics
from .models import Sucursal
from prestamo.models import Prestamo
from .serializer import SucursalesSerializer, PrestamosSucursalesSerializer
from rest_framework.permissions import AllowAny 

class SucursalesView(generics.ListCreateAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalesSerializer
    permission_classes = [AllowAny]


class PrestamosSucursalesView(generics.ListCreateAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = PrestamosSucursalesSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        pk = self.kwargs.get('pk')
        if pk:
            return Sucursal.objects.filter(branch_id=pk)
        else:
            return Sucursal.objects.all()