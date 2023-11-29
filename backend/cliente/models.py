from django.db import models



class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    branch_id = models.IntegerField()
    address_id = models.IntegerField(blank=True, null=True)
    
    class Meta:
        managed = False
        db_table = 'cliente'

class Direccion(models.Model):
    address_id = models.AutoField(primary_key=True, blank=True)
    street = models.TextField()
    address_number = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'direccion'

class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.TextField()
    employee_surname = models.TextField()
    employee_dni = models.TextField(db_column='employee_DNI')  # Field name made lowercase.
    branch_id = models.IntegerField()
    employee_hire_date_e = models.DateField(blank=True, null=True)
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'empleado'