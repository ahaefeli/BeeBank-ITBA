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


class TransferenciasParticularesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencia
        fields = ['transfer_id', 'ammount', 'executed_at', 'from_account_id', 'to_account_id']


class TransferenciaSerializer(serializers.ModelSerializer):
    from_user = serializers.SerializerMethodField()
    out_transfers = serializers.SerializerMethodField()
    
    class Meta:
        model = Cuenta
        fields = ['account_id', 'from_user', 'out_transfers']
        depth = 1

    def get_from_user(self, instance):
        user_instance = User.objects.get(id=instance.customer_id)

        user_serializer = ClienteSerializer(user_instance)
        return user_serializer.data

    def get_out_transfers(self, cuentas):
        out_transferencias_instance = Transferencia.objects.filter(from_account=cuentas.account_id)

        out_transferencias_serializer = TransferenciasParticularesSerializer(out_transferencias_instance)

        return out_transferencias_serializer.data