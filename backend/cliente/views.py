from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response 
from rest_framework.views import APIView
from .serializer import UserSerializer, DireccionSerializer, ClientSerializer
from django.contrib.auth.models import User
from .models import Direccion, Cliente






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
    
class ClienteView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ClientSerializer
    queryset = Cliente.objects.all()

class ClienteViewDetail(APIView):
    serializer_class = ClientSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        cliente = Cliente.objects.filter(customer_id=customer_id)
        serializer = ClientSerializer(cliente, many=True)

        return Response(serializer.data)
    

class ClienteRegistroView(APIView):
    serializer_class = UserSerializer 
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        data = request.data
        user_data = {
            'username': data.get('username'),
            'password': data.get('password'),
            'last_login': None,
            'is_superuser': False,
            'email': data.get('email'),
            'is_staff': False,
            'is_active': True,
            'date_joined': None,
            'first_name': data.get('first_name'),
            'last_name': data.get('last_name'),
            'dni': data.get('dni'),
        }

        serializer = self.get_serializer(data=user_data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
