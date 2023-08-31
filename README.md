# BeeBank-ITBA
README.me

Proyecto

Bienvenidos a Beebank, un proyecto de banco desarrollado por el grupo 5 (De Ameller Lucas, Romeo Lorenzo Monfroglio, Haefeli Agustin y Peralta Agustín).
En esta primera versión implementamos la maqueta con base en HTML CSS Y JavaScript.


Páginas 

Cada una de las páginas contiene un HTML y un CSS específico, fuera de un css main y uno dedicado. A continuación procederemos a explicar que función cumple cada una de ellas:

HTML

Index.html: Ideada para ser la página que se encuentre el cliente al buscar nuestro nombre, bien por primera vez, como al cerrar sesión. Explica nuestros objetivos, que ofrecemos como compañía. Y a su vez, atajos a la página de soporte, preguntas frecuentes e inicio de sesión/creación de cuentas.

Login.html/Register.html: Anidada a la página principal, cumplen las funcionalidades propias de sus nombres (facilitarle el cliente ser parte de nuestro banco). Dicha está pensada para ser full funcional cuando tengamos nuestra base de datos.


Una vez dentro de nuestro banco tenemos páginas dedicadas para las siguientes tareas;
Inicio - Cuenta - Transferencia - Préstamos - Soporte - Configuración - Cerrar sesión 


l-home.html: Desplegamos un paneo general de la cuenta donde podemos obtener nuestro "CBU" y podemos acceder al panel de "transferencias" con tan solo un clic. Nuestros datos de tarjetas y el balance están escondidos por defecto.  A su vez tenemos a nuestra disposición un historial de transferencias, que data la fecha, ID, cuenta de origen, cuenta de destino, monto y motivo de las últimas tres transferencias. 

l-accounts.html: : Agregamos dos cuentas a modo de referencia; Juan Manuel Perez (Cuenta de caja de ahorro particular) y Distribuidora SRL (cuenta corriente). Ambos con el agregado del tag "$bee", tag que adoptamos como propio para diferenciar alias de nuestros clientes frente a la competencia. 

l-transfer.html: Cuenta con el balance de la cuenta, un historial de gastos y transferencias (detallando si dichas fueron exitosas o no, y el por qué). Y la posibilidad de buscas en nuestra base de datos, a una persona por su alias, tanto dentro de BeeBank (con el tag $bee), como fuera de ella.

l-loans.html: Cuenta con dos funcionalidades grandes, el poder pedir préstamos seleccionando el importe, destino y linea de préstamo (con distintos perfiles) y una calculadora para obtener más información de los intereses del préstamo (teniendo en cuenta lo siguiente: Monto del préstamo, Interés porcentual y duración en meses).

support.html: Facilitamos información sobre preguntas frecuentas y, a su vez, proporcionamos líneas privadas para que nuestros clientes se comuniquen con nuestros asesores.


(HTML's anidados a otros)

l-view-cbu.html: anidada dentro del inicio, está creada para facilitar la información del usuario (Cuil-Cuit, Banco, Tipo de cuenta, Sucursal, CBU y alias)

l-make-transfer.html: también dentro de inicio, facilita el envío de transferencias con todos los datos y opciones necesarias.


CSS 

Dividimos el css en dos partes. Una main, que contiene la barra de navegación leteral, estilos generales y variables de colores que utilizamos en todas las páginas

Elegimos utilizar flexbox para crear la página de forma responsive, e implementamos media queries para que, cuando llegue a determinado tamaño, la barra se desplace a la parte inferior.

Js

Configuramos el javascript para obtener animaciones (en la página principal), en la opción de prestamos entre otras partes. Facilitando así, la funcionalidad para el cliente final.


Próximas implementaciones: 
React!
