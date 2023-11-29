from rest_framework import serializers
from .models import Cliente, Direccion
from sucursal.models import Sucursal
from django.contrib.auth.models import User




# 127.0.0.1/cliente/data/
# 127.0.0.1/cliente/direccion/<int>
class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Direccion
        fields=['street', 'address_number']


class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sucursal
        fields=['branch_name']


class UserSerializer(serializers.ModelSerializer):
    direccion = serializers.SerializerMethodField()
    sucursal = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'direccion', 'sucursal']

    def get_direccion(self, instance):
        cliente_instance = Cliente.objects.get(customer_id=instance.id)
        direccion_instance = Direccion.objects.get(address_id=cliente_instance.address_id)
        
        direccion_serializer = DireccionSerializer(direccion_instance)
        return direccion_serializer.data
    
    def get_sucursal(self, instance):
        cliente_instance = Cliente.objects.get(customer_id=instance.id)
        sucursal_instance = Sucursal.objects.get(branch_id=cliente_instance.branch_id)

        sucursal_serializer = SucursalSerializer(sucursal_instance)
        return sucursal_serializer.data