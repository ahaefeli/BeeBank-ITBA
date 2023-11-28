from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializer import CuentaSerializer
from .models import Cuenta

class CuentaView(generics.ListAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return User.objects.get(id=self.request.user.id)
        return Cuenta.objects.filter(customer_id=6)