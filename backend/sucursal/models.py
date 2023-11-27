from django.db import models


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sucursal'
