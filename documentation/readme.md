TODO:

    # Una vez hecho el Auth:
      restaurar los comentarios de la línea 12 de   cliente.views  |  cuenta.views

    Importante:
# (BACK)
• Un empleado autenticado puede obtener el listado de tarjetas de crédito de uncliente determinado (get)
• Un empleado autenticado puede registrar un préstamo para un cliente y acreditar el saldo al balance. (*) (post/put)
• Un empleado autenticado puede anular un préstamo para un cliente, revirtiendo elmonto correspondiente (**) (delete)
• El propio cliente autenticado o un empleado puede modificar las direcciones (put)

(*) La base de datos ya tiene un trigger para que el saldo se añada al balance de la cuenta donde se registró
(**) Hay que agregar un trigger AFTER DELETE para que se descuente del balance cuando un prestamo se elimina

# (FRONT)
• Revisar warnings del Home 
• En pantallas chicas la parte de transferencias se superpone y no se puede cerrar 
• Borrar console.log()s (en la parte de préstamos) 
• Agregar formulario de contacto en la sección de Soporte 
• Verificar si el formulario de registro está bien estructurado 
• Alternar entre el botón de únete a nosotros y el nombre del usuario según esté autenticado o no 
• En config solo están los títulos, faltó poner la configuración
• Debe poder ver su tipo de cuenta y balance (hay que agregar los tipos de cuenta a la base de datos)
• Añadir función de préstamos según tipo de cuenta
• Obtener las tarjetas desde la base de datos y mostrarlas en el pop up
• Crear cuentas para empleados con privilegios de administrador (otorgar y anular préstamos)
• Permitir modificar las direcciones




    Secundario:
• Hacer que se pueda cambiar configuración el theme
• Agregar chatbot en la sección de soporte


# ARCHIVOS EXTRA USADOS
migrate_user.py
    Script usado para migrar todos los usuarios de la tabla existente
    Cliente a la tabla de autenticación default de Django (auth_user)
