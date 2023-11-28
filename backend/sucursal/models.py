from django.db import models
from cliente.models import Direccion

class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()
    address = models.ForeignKey(Direccion, on_delete=models.CASCADE, null=True)

    class Meta:
        managed = False
        db_table = 'sucursal'
