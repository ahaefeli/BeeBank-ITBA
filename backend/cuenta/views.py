from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework import status


from django.db.models import Q
from django.shortcuts import get_object_or_404

from .models import Cuenta, Cards, Transferencia
from .serializer import CuentaSerializer, TarjetaSerializer, TransferenciaSerializer

# 127.0.0.1/cuenta/data/
class CuentaView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Cuenta.objects.all().order_by('customer_id')
    serializer_class = CuentaSerializer
    
class CuentaViewDetail(APIView):
    serializer_class = CuentaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')
        accounts = Cuenta.objects.filter(customer_id=customer_id)
        serializer = CuentaSerializer(accounts, many=True)
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')
        
        # Obtén y elimina todas las cuentas con account_id igual a None
        accounts_to_delete = Cuenta.objects.filter(customer_id=customer_id, account_id__isnull=True)
        accounts_to_delete.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def post(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')
        request_data = request.data.copy()
        request_data['customer_id'] = customer_id  # Asigna el customer_id antes de crear la cuenta
        serializer = CuentaSerializer(data=request_data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CuentaViewDetailUpdate(APIView):
    serializer_class = CuentaSerializer
    permission_classes = [IsAuthenticated]

    lookup_fields = ('customer_id', 'account_id')

    def get_object(self):
        queryset = Cuenta.objects.all()

        for field in self.lookup_fields:
            value = self.kwargs.get(field)
            if value is not None:
                queryset = queryset.filter(**{field: value})

        # Devuelve el objeto o lanza un error 404 si no se encuentra
        return get_object_or_404(queryset)

    def put(self, request, *args, **kwargs):
        cuenta = self.get_object()
        serializer = CuentaSerializer(cuenta, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, *args, **kwargs):
        serializer = CuentaSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        cuenta = self.get_object()
        cuenta.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CuentaViewDetailCBU(APIView):
    serializer_class = CuentaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'account_cbu'

    def get(self, request, *args, **kwargs):
        account_cbu = self.kwargs.get('account_cbu')
        
        try:
            account = Cuenta.objects.filter(account_cbu=account_cbu).first()
            serializer = CuentaSerializer(account)
            return Response(serializer.data)
        except Cuenta.DoesNotExist:
            return Response({"detail": "Cuenta no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        
class CuentaViewDetailAlias(APIView):
    serializer_class = CuentaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'account_alias'

    def get(self, request, *args, **kwargs):
        account_alias = self.kwargs.get('account_alias')
        
        try:
            # Utiliza get() en lugar de filter() para obtener una única instancia
            account = Cuenta.objects.filter(account_alias=account_alias).first()
            serializer = CuentaSerializer(account)
            return Response(serializer.data)
        except Cuenta.DoesNotExist:
            return Response({"detail": "Cuenta no encontrada"}, status=status.HTTP_404_NOT_FOUND)
    
class CuentaViewDetailMain(APIView):
    serializer_class = CuentaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        accounts = Cuenta.objects.filter(customer_id=customer_id, tipo_cuenta="ahorro").first()
        if accounts!=None:
            serializer = CuentaSerializer(accounts)
        else:
            accounts = Cuenta.objects.filter(customer_id=customer_id, tipo_cuenta="corriente").first()
            serializer = CuentaSerializer(accounts)
        return Response(serializer.data)

# 127.0.0.1/cuenta/tarjeta/credito
class TarjetaCreditoView(RetrieveAPIView):
    serializer_class = TarjetaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get_object(self):
        customer_id = self.kwargs.get('customer_id')
        card = get_object_or_404(Cards, customer_id=customer_id, card_type="Credito")
        return card
        
class TarjetaDebitoView(RetrieveAPIView):
    serializer_class = TarjetaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get_object(self):
        customer_id = self.kwargs.get('customer_id')
        card = get_object_or_404(Cards, customer_id=customer_id, card_type="Debito")
        return card



# 127.0.0.1/cuenta/transferencia
class TransferenciaView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = TransferenciaSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()  # Guardar el objeto en la base de datos

            # Devolver una respuesta exitosa
            return Response({'mensaje': 'Datos recibidos correctamente'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TransferenciaViewDetail(APIView):
    serializer_class = TransferenciaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        transferecias = Transferencia.objects.filter(Q(from_account_id=customer_id) | Q(to_account_id=customer_id))
        serializer = TransferenciaSerializer(transferecias, many=True)

        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        transferecias = Transferencia.objects.filter(Q(from_account_id=customer_id) | Q(to_account_id=customer_id))
        serializer = TransferenciaSerializer(transferecias, many=True)

        return Response(serializer.data)