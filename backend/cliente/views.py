from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response 
from .serializer import UserSerializer, DireccionSerializer
from django.contrib.auth.models import User
from .models import Direccion

# 127.0.0.1/cliente/api/users/
class UserList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request):
        usuarios = User.objects.all()
        paginator = LimitOffsetPagination()
        result_page = paginator.paginate_queryset(usuarios, request)
        serializer = UserSerializer(result_page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

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