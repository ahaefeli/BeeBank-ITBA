En este sprint el equipo de desarrollo fullstack de Beebank se encargó de unificar el proyecto,
- separamos todo el proyecto en 2 carpetas, una para el backend y otra para el frontend
- reformamos la base de datos para adaptarla a nuestras necesidades, lo que incluye la creación de 4 triggers:
    
    -   (1) after_insert_auth_user_cliente
        (2) after_insert_auth_user_empleado
                que se activan al crear un nuevo usuario, añadiendo datos de utilidad a la tabla que corresponda (usuario o empleado)
    -   (3) after_insert_prestamo  
    -   (4) after_delete_prestamo
                que se activan al añadir o eliminar un préstamo, modificando el balance de la cuenta asociada  
- creamos todos los endpoints solicitados
- funcionan las funciones de transacciones y el historial de las mismas
-se cargan todos los datos automaticamente desde los endpoints
-el balance se actualiza una vez recargado el home
-si se registra con un usuario staff aparecerá un menu personalizado en el home con las funciones pedidas en el sprint, todas funcionales

# ARCHIVOS EXTRA USADOS
migrate_user.py
    Script usado para migrar todos los usuarios de la tabla existente
    Cliente a la tabla de autenticación default de Django (auth_user)
