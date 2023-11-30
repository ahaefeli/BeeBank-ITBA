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
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name']


class TransferenciaSerializer(serializers.ModelSerializer):
    from_user = serializers.SerializerMethodField()

    class Meta:
        model = Cuenta
        fields = ['account_id', 'from_user', 'transferencias_entrantes', 'transferencias_salientes']
        depth = 2

    def get_from_user(self, instance):
        user_instance = User.objects.get(id=instance.customer_id)

        user_serializer = ClienteSerializer(user_instance)
        return user_serializer.data