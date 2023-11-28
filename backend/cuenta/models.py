from django.db import models


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


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField()
    balance = models.IntegerField()
    iban = models.TextField()
    tipo_cuenta = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'


class Movimientos(models.Model):
    movement_id = models.AutoField(primary_key=True, blank=True)
    account_id = models.IntegerField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    operation = models.TextField(blank=True, null=True)
    time = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'movimientos'
