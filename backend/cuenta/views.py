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
"""class TransferenciaView(APIView):
    def post(self, request, *args, **kwargs):
        # Obtener los datos de la solicitud POST
        transfer_data = request.data

        # Serializar los datos
        serializer = TransferenciaSerializer(data=transfer_data)
        
        # Validar y guardar la transferencia
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)"""
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

        transferecias = Transferencia.objects.filter(Q(from_account=customer_id) | Q(to_account=customer_id))
        serializer = TransferenciaSerializer(transferecias, many=True)

        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        transferecias = Transferencia.objects.filter(Q(from_account=customer_id) | Q(to_account=customer_id))
        serializer = TransferenciaSerializer(transferecias, many=True)

        return Response(serializer.data)