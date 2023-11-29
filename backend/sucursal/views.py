from django.shortcuts import render
from rest_framework import generics
from .models import Sucursal
from prestamo.models import Prestamo
from .serializer import SucursalesSerializer, PrestamosSucursalesSerializer
from rest_framework.permissions import AllowAny 

# 127.0.0.1/sucursal/show/
class SucursalesView(generics.ListAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalesSerializer
    permission_classes = [AllowAny]


# 127.0.0.1/sucursal/prestamo/
# 127.0.0.1/sucursal/prestamo/<int>
class PrestamosSucursalesView(generics.ListAPIView):
    queryset = Sucursal.objects.all()
    serializer_class = PrestamosSucursalesSerializer
    permission_classes = [AllowAny]
    
    lookup_field = 'branch_id'
    def get_queryset(self):
        branch_id = self.kwargs.get('branch_id')
        if branch_id:
            return Sucursal.objects.filter(branch_id=branch_id)
        else:
            return Sucursal.objects.all()