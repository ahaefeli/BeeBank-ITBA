from rest_framework import serializers
from .models import Prestamo, PrestamosPermitidos

# 127.0.0.1/prestamo/data/
class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total']


# 127.0.0.1/prestamo/cliente/<int>
class PrestamoEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['loan_id', 'loan_type', 'loan_date', 'loan_total', 'customer_id', 'branch_id']