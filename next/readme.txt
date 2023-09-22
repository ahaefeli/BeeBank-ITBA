README.me
/*---_---_---_---_---_---_---_---_---_---_---__---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---_---__---_---_---_---_---_---_---_---_---_---_*/
GRUPO 5:
Agustin Haefeli,
Monfroglio Romeo Lorenzo,
Lucas Martín De Ameller

Proyecto:

En este tercer sprint logramos pasar nuestro proyecto web a next.js, notamos una mejora notable en cuanto rendimiento y un poco de cambios dentro de la distribucion de los archivos.
La app fue completamente pasada con el framework next.js dentro de react donde estabamos en el sprint numero 2.

lo que logramos destacar y mejorar en este sprint fue:

Logramos comprender mejor la division de carpetas dentro de la web dejando las paginas principales dentro de "app"
No hicimos uso de la carpeta por defecto "pages", utilizamos el componente "Link" de next para el ruteo de las paginas.

Agregamos animaciones dentro de diversas paginas, como por ejemplo dentro de home, al ver nuestra tarjeta y sus detalles sensibles al rotarla con un click.

Agregamos un filtro de para la api de divisas a la hora de hacer una conversion de moneda, este filtro nos permite poder mostrar solamente las 4 que nos interesan.

Optimizamos el SEO en la mayoria de paginas logrando buenos valores en casi todas ellas.

Se creo un JSON donde simulamos la obtencion de datos para la parte de transferencias desde una base de datos, el balance se calcula en base a lo que 
se transfirio sumando o restando estos valores. (mirar transferapi y usersapi)

Mejoramos el css de la mayoria de las paginas, agregamos metadatos y un archivo robots.txt para aumentar la eficiencia del seo.



Se conservaron animaciones y diseños del sprint 1 que fueron propicios a esta nueva pagina en react.


Para el próximo sprint tenemos pendiente:
• Agregar funcionalidades con JS en los componentes de Next.
• Arreglar responsividad con media queries, que en algunos sitios ha sido difícil definirlo debido al constante cambio en el código durante el desarrollo.
• Agregar botones para hacer los navs desplegables en mobile.