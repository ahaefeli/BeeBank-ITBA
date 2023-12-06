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
    class Meta:
        model=User
        fields=["id","password","last_login","username","last_name","email","first_name"]