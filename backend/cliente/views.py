from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializer import UserSerializer, DireccionSerializer
from django.contrib.auth.models import User
from .models import Direccion
from rest_framework.views import APIView

# 127.0.0.1/cliente/api/users/
class UserList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserListDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

# 127.0.0.1/cliente/direccion/<address_id>
class DireccionEditarView(generics.RetrieveUpdateAPIView):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = "address_id"
    def get_object(self):
        address_id = self.kwargs.get('address_id')

        return Direccion.objects.get(address_id=address_id)