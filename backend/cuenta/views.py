from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializer import CuentaSerializer, TarjetaSerializer, TransferenciaSerializer
from .models import Cuenta, Cards, Transferencia
from django.contrib.auth.models import User

# 127.0.0.1/cuenta/data/
class CuentaView(generics.ListAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return User.objects.get(id=self.request.user.id)
        return Cuenta.objects.filter(customer_id=6)
    

# 127.0.0.1/cuenta/tarjeta/credito
class TarjetaCreditoView(generics.ListAPIView):
    queryset = Cards.objects.all()
    serializer_class = TarjetaSerializer
    permission_classes = [AllowAny]
    
    lookup_field = 'customer_id'
    def get_queryset(self):
        customer_id = self.kwargs.get('customer_id')
        if customer_id:
            return Cards.objects.filter(customer_id=customer_id, card_type="Credito")
        else:
            return Cards.objects.filter(card_type="Credito")
        

# 127.0.0.1/cuenta/tarjeta/debito
class TarjetaDebitoView(generics.ListAPIView):
    queryset = Cards.objects.all()
    serializer_class = TarjetaSerializer
    permission_classes = [AllowAny]
    
    lookup_field = 'customer_id'
    def get_queryset(self):
        customer_id = self.kwargs.get('customer_id')
        if customer_id:
            return Cards.objects.filter(customer_id=customer_id, card_type="Debito")
        else:
            return Cards.objects.filter(card_type="Debito")


# 127.0.0.1/cuenta/transferencia
class TransferenciaView(generics.ListCreateAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = TransferenciaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return Cuenta.objects.filter(customer_id=self.request.user.id)
        return Cuenta.objects.filter(customer_id=6)