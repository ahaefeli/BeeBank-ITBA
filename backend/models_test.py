# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuditoriaCuenta(models.Model):
    audit_id = models.AutoField(primary_key=True, blank=True, null=True)
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


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Cardbrand(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True, null=True)
    card_brand = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cardBrand'


class Cards(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True, null=True)
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
    customer_id = models.IntegerField(blank=True, null=True)
    branch_id = models.IntegerField(blank=True, null=True)
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cliente'


class Cuenta(models.Model):
    account_id = models.IntegerField(blank=True, null=True)
    customer_id = models.IntegerField(blank=True, null=True)
    balance = models.IntegerField(blank=True, null=True)
    iban = models.TextField(blank=True, null=True)
    tipo_cuenta = models.TextField(blank=True, null=True)  # This field type is a guess.
    account_alias = models.TextField(blank=True, null=True)
    account_cbu = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'


class Direccion(models.Model):
    address_id = models.AutoField(primary_key=True, blank=True, null=True)
    street = models.TextField()
    address_number = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'direccion'


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Empleado(models.Model):
    employee_id = models.IntegerField(blank=True, null=True)
    branch_id = models.IntegerField(blank=True, null=True)
    address_id = models.IntegerField(blank=True, null=True)
    employee_hire_date_e = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'empleado'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
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


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()
    address_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sucursal'


class Transferencias(models.Model):
    transfer_id = models.AutoField(primary_key=True, blank=True, null=True)
    from_account_id = models.IntegerField(blank=True, null=True)
    to_account_id = models.IntegerField(blank=True, null=True)
    ammount = models.IntegerField(blank=True, null=True)
    executed_at = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'transferencias'
