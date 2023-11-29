from rest_framework import serializers
from .models import Cuenta, Cards, Transferencia
from cliente.models import Cliente
from django.contrib.auth.models import User

# 127.0.0.1/cuenta/data/
class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ['balance', 'tipo_cuenta']


# 127.0.0.1/cuenta/tarjeta/credito
# 127.0.0.1/cuenta/tarjeta/debito
class TarjetaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cards
        fields = ['card_id', 'customer_id', 'card_type', 'card_create_date', 'card_create_expdate']


# 127.0.0.1/cuenta/transferencia
# TO DO