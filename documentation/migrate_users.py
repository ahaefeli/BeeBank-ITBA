# Script usado para migrar todos los usuarios de la tabla existente Cliente a la tabla de autenticación default de Django
from django.contrib.auth.models import User
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
            email=f'{cliente.customer_name[0:4]}.{cliente.customer_surname}@gmail.com'  # Puedes asignar el campo de correo electrónico si lo tienes
        )
        nuevo_usuario.save()

if __name__ = "__main__":
    #migrar_usuarios()