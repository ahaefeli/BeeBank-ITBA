# Generated by Django 4.2.7 on 2023-11-28 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0002_delete_sucursal'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AuditoriaCuenta',
        ),
        migrations.DeleteModel(
            name='Cardbrand',
        ),
        migrations.DeleteModel(
            name='Cards',
        ),
        migrations.DeleteModel(
            name='Cuenta',
        ),
        migrations.DeleteModel(
            name='Movimientos',
        ),
    ]
