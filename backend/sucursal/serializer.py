from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Sucursal
from cliente.models import Direccion, Cliente
from prestamo.models import Prestamo

# 127.0.0.1/sucursal/show/
class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Direccion
        fields=['street', 'address_number']

class SucursalesSerializer(serializers.ModelSerializer):
    direccion = serializers.SerializerMethodField()

    class Meta:
        model = Sucursal
        fields = ['branch_name', 'direccion']

    def get_direccion(self, instance):
        direccion_instance = Direccion.objects.get(address_id=instance.address_id)
        
        direccion_serializer = DireccionSerializer(direccion_instance)
        return direccion_serializer.data
    


# 127.0.0.1/sucursal/prestamo/
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email']

class PrestamoSerializer(serializers.ModelSerializer):
    customer = serializers.SerializerMethodField()
    
    class Meta:
        model = Prestamo
        fields = ['loan_id', 'loan_type', 'loan_total', 'customer']

    def get_customer(self, instance):
        cliente_instances = User.objects.filter(id=instance.customer_id)
        
        cliente_data = []
        for cliente_instance in cliente_instances:
            cliente_serializer = ClienteSerializer(cliente_instance)
            cliente_data.append(cliente_serializer.data)
        return cliente_data

class PrestamosSucursalesSerializer(serializers.ModelSerializer):
    loans = serializers.SerializerMethodField()

    class Meta:
        model = Sucursal
        fields = ['loans']

    def get_loans(self, instance):
        prestamo_instances = Prestamo.objects.filter(branch_id=instance.branch_id)
        
        prestamo_data = []
        for prestamo_instance in prestamo_instances:
            prestamo_serializer = PrestamoSerializer(prestamo_instance)
            prestamo_data.append(prestamo_serializer.data)

        return prestamo_data
