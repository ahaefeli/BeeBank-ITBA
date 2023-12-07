from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView


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
class TransferenciaView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Transferencia.objects.all()
    serializer_class = TransferenciaSerializer

class TransferenciaViewDetail(APIView):
    serializer_class = TransferenciaSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'customer_id'

    def get(self, request, *args, **kwargs):
        customer_id = self.kwargs.get('customer_id')

        transferecias = Transferencia.objects.filter(Q(from_account=customer_id) | Q(to_account=customer_id))
        serializer = TransferenciaSerializer(transferecias, many=True)

        return Response(serializer.data)
