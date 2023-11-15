from rest_framework import viewsets, permissions
from .models import *
from .serializers import ClienteSerializer
class ClienteViewSet(viewsets.ModelViewSet):
    query = Cliente.objects.all()
    permission_classes = [permissions.AllowAny] # IMPORTANTE: CAMBIAR A IsAuthenticated CUANDO ESTÉ HECHA LA AUTENTICACIÓN
    serializer_class = ClienteSerializer