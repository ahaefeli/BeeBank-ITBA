from rest_framework import serializers
from .models import Prestamo, PrestamosPermitidos


class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total']