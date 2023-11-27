from rest_framework import serializers
from .models import Sucursal,Direccion

class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Direccion
        fields=['street', 'adress_number']

class ShowBranchesSerializer(serializers.ModelSerializer):
    direccion = serializers.SerializerMethodField()

    class Meta:
        model = Sucursal
        fields = ['branch_name', 'direccion']

    def get_direccion(self, instance):
        direccion_instance = Direccion.objects.get(adresss_id=instance.address_id)
        
        direccion_serializer = DireccionSerializer(direccion_instance)
        return direccion_serializer.data