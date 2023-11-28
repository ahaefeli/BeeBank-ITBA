from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializer import PrestamoSerializer
from .models import Prestamo

class PrestamoView(generics.ListAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return User.objects.get(id=self.request.user.id)
        return Prestamo.objects.filter(customer_id=6)