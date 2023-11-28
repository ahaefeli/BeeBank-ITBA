from django.db import models

class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField(blank=True, null=True)
    loan_date = models.TextField()
    loan_total = models.FloatField()
    customer_id = models.IntegerField()
    branch_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'prestamo'


class PrestamosPermitidos(models.Model):
    loan_id = models.IntegerField(blank=True, null=True)
    loan_type = models.TextField(blank=True, null=True)
    loan_date = models.TextField(blank=True, null=True)
    loan_total = models.FloatField(blank=True, null=True)
    customer_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'prestamos_permitidos'