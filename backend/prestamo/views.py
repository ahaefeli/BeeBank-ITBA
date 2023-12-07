from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from rest_framework.views import APIView
from .serializer import PrestamoEmpleadoSerializer
from .models import Prestamo
from rest_framework.response import Response


# 127.0.0.1/prestamo/data/
"""class PrestamoView(generics.ListAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoEmpleadoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        #return User.objects.get(id=self.request.user.id)
        return Prestamo.objects.filter(customer_id=6)"""

class PrestamoView(APIView):
    serializer_class = PrestamoEmpleadoSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = 'branch_id'

    def get(self, request, *args, **kwargs):
        branch_id = self.kwargs.get('branch_id')

        prestamos = Prestamo.objects.filter(branch_id=branch_id)
        serializer = PrestamoEmpleadoSerializer(prestamos, many=True)

        return Response(serializer.data)


# 127.0.0.1/prestamo/cliente/<int>
class PrestamoEmpleadoView(generics.ListCreateAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoEmpleadoSerializer
    permission_classes = [AllowAny]

    lookup_field = 'customer_id'
    def get_queryset(self):
        customer_id = self.kwargs.get('customer_id')
        return Prestamo.objects.filter(customer_id=customer_id)

# 127.0.0.1/prestamo/cliente/delete/<int>
class PrestamoEmpleadoDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoEmpleadoSerializer
    permission_classes = [AllowAny]
    
    lookup_field = 'loan_id'
    def get_queryset(self):
        loan_id = self.kwargs.get('loan_id')
        return Prestamo.objects.filter(loan_id=loan_id)