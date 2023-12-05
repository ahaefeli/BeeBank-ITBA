from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from .serializer import CuentaSerializer, TarjetaSerializer, TransferenciaSerializer
from django.shortcuts import get_object_or_404
from .models import Cuenta, Cards, Transferencia

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
class TransferenciaView(generics.ListCreateAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = TransferenciaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return Cuenta.objects.filter(customer_id=self.request.user.id)
        return Cuenta.objects.filter(customer_id=6)