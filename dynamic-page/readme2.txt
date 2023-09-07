README.me
/*---_---_---_---_---_---_---_---_---_---_---__---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---__---_---_---_---_---_---_---_---_---_---_*/
GRUPO 5: Agustin Haefeli, Monfroglio Romeo Lorenzo, Lucas Martín De Ameller, Peralta Agustín

Proyecto


En esta segundo versión implementamos la maqueta con base en react.
Migramos completamente la pagina a react, entre las funcionalidades agregadas podemos destacar: 

divimos en componentes react, 
con su estilo por pagina y algunas funcionalidades 
separadas(no en todos los casos).

Renombramos los css por clases (Sabemos como modularizarlos) por falta de tiempo y de 2 miembros
no pudimos hacerlo completamente como componentes de css.modules, sino que se dividio por paginas, pero sera hecho.

Agregamos validaciones previas al envio de informacion al servidor, por ejemplo que la contraseña sea mayor
a 8 digitos y que contenga una mayuscula un numero y un caracter especial, esto se simboliza mediante un pop up rojo de error(hecho con js)
de esta manera no se hace la peticion al servidor antes de que esto este verificado.

Usamos una api de divisas, conseguimos la API key y la API url, la consumimos con fetch y parseamos con json
se uso dentro del Conversor de monedas, y quedo funcional este mismo.

Pasamos el calculo de prestamos y su funcionalidad a react, corregimos el calculo ya que estaba hecho 
erroneamente.

creamos una pagina de error general si se quiere acceder a un campo dentro de la url donde no existe una pagina, 
mediante react router. Tambien con este ultimo creamos las rutas y hicimos funcional el login al presionar el boton(link)

Se conservaron animaciones y diseños del sprint 1 que fueron propicios a esta nueva pagina en react.


Para el próximo sprint tenemos pendiente eficientizar el código en su totalidad en cuando a componentes, dado que muchos actualmente están hardcodeados por falta de tiempo. Por ejemplo, en lugar de tener un JSON con los textos e implementarlos automáticamente en la sección de FAQ, están agregados manualmente como se haría en una página estática.
Además, vamos a arreglar problemas de CSS (algunos componentes que no se adaptan correctamente)

