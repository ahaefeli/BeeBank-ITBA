En este sprint el equipo de desarrollo fullstack de Beebank se encargó de unificar el proyecto,
- separamos todo el proyecto en 2 carpetas, una para el backend y otra para el frontend
- reformamos la base de datos para adapatarla a nuestras necesidades, lo que incluye la creación de 4 triggers:
    
    -   (1) after_insert_auth_user_cliente
        (2) after_insert_auth_user_empleado
                que se activan al crear un nuevo usuario, añadiendo datos de utilidad a la tabla que corresponda (usuario o empleado)
    -   (3) after_insert_prestamo  
    -   (4) after_delete_prestamo
                que se activan al añadir o eliminar un préstamo, modificando el balance de la cuenta asociada  
- creamos todos los endpoints solicitados







# ##################################################### #
#                       TO DO                           #
# ##################################################### #


    # Una vez hecho el Auth:
      restaurar los comentarios de la línea 12 de   cliente.views  |  cuenta.views


# (FRONT)
• Eliminar las transferencias hardcodeadas y tomarlas en una lista desde el endpoint
• Agregar formulario de contacto en la sección de Soporte 
• Alternar entre el botón de únete a nosotros y el nombre del usuario según esté autenticado o no 
• En config solo están los títulos, faltó poner la configuración
• Debe poder ver su tipo de cuenta y balance (hay que agregar los tipos de cuenta a la base de datos)
• Añadir función de préstamos según tipo de cuenta
• Obtener las tarjetas desde la base de datos y mostrarlas en el pop up
• Crear cuentas para empleados con privilegios de administrador (otorgar y anular préstamos)
• Permitir modificar las direcciones




    Secundario:
• Hacer que se pueda cambiar configuración del theme
• Agregar chatbot en la sección de soporte


# ARCHIVOS EXTRA USADOS
migrate_user.py
    Script usado para migrar todos los usuarios de la tabla existente
    Cliente a la tabla de autenticación default de Django (auth_user)
