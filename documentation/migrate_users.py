# Script usado para migrar todos los usuarios de la tabla existente Cliente a la tabla de autenticación default de Django
from django.contrib.auth.models import User
from cuenta.models import Cuenta
from cliente.models import Cliente
from random import randint, sample

def crear_contraseña(lenght):
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    nueva_contrasena = ''.join(sample(caracteres,lenght))
    return nueva_contrasena


def migrar_usuarios():
    clientes = Cliente.objects.all()

    for cliente in clientes:
        password_length = randint(8,10)
        nueva_contrasena = crear_contraseña(password_length)
        nuevo_usuario = User.objects.create_user(
            username=cliente.customer_dni,
            password=nueva_contrasena,
            first_name=cliente.customer_name,
            last_name=cliente.customer_surname,
            email=f'{cliente.customer_name[0:4]}.{cliente.customer_surname}@gmail.com',
            is_staff=0
        )
        nuevo_usuario.save()

def crear_cbu():
    chars = "123456789000"

    bank_code = "080"
    branch_code = "0458"
    account_code = sample(chars,5)
    validate_code = '5'
    control_code = sample(chars,10)

    cbu = int(bank_code + branch_code + account_code + validate_code + control_code)
    return cbu

def agregar_cbus():
    cuentas = Cuenta.objects.all()

    for cuenta in cuentas:
        cliente_asociado = User.objects.get(id=cuenta.customer_id)
        
        cuenta.account_cbu = crear_cbu()
        cuenta.account_alias = f'{cliente_asociado.first_name[0:4].lower()}.{cliente_asociado.last_name.lower()}.bbank'

        cuenta.save()
