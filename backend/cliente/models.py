from django.db import models

# Create your models here.
class AuditoriaCuenta(models.Model):
    audit_id = models.AutoField(primary_key=True, blank=True)
    old_id = models.IntegerField(blank=True, null=True)
    new_id = models.IntegerField(blank=True, null=True)
    old_balance = models.FloatField(blank=True, null=True)
    new_balance = models.FloatField(blank=True, null=True)
    old_iban = models.TextField(blank=True, null=True)
    new_iban = models.TextField(blank=True, null=True)
    old_type = models.TextField(blank=True, null=True)
    new_type = models.TextField(blank=True, null=True)
    user_action = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'auditoria_cuenta'




class Cardbrand(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True)
    card_brand = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cardBrand'


class Cards(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True)
    customer_id = models.IntegerField()
    card_type = models.TextField(blank=True, null=True)
    card_number = models.IntegerField()
    card_create_date = models.DateTimeField(blank=True, null=True)
    card_create_expdate = models.DateTimeField(blank=True, null=True)
    card_cvv = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cards'


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()  # This field type is a guess.
    customer_dni = models.TextField(db_column='customer_DNI')  # Field name made lowercase.
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cliente'


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField()
    balance = models.IntegerField()
    iban = models.TextField()
    tipo_cuenta = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'cuenta'


class Direccion(models.Model):
    adresss_id = models.AutoField(primary_key=True, blank=True)
    street = models.TextField()
    adress_number = models.IntegerField()

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


class Movimientos(models.Model):
    movement_id = models.AutoField(primary_key=True, blank=True)
    account_id = models.IntegerField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    operation = models.TextField(blank=True, null=True)
    time = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'movimientos'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
    loan_date = models.TextField()
    loan_total = models.FloatField()
    customer_id = models.IntegerField()

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


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sucursal'
