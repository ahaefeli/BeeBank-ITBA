from rest_framework import serializers
from .models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cliente
        fields=('customer_id', 'customer_name', 'customer_surname','customer_dni','dob','branch_id','address_id')