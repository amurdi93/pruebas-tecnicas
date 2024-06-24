## Testing del componente ButtonCounter

Para realizar los test del componente ButtonCounter he utilizado las siguientes librerías:

react-testing-library: esta librería nos permite simular el comportamiento de los usuarios en nuestros componentes y comprobar que se renderizan correctamente.
jest: esta librería se utiliza para ejecutar los test y comprobar que pasan correctamente.

## Test realizados

He escrito tres test para el componente ButtonCounter:

- Renderizado correcto: en este test comprobamos que el componente se renderiza correctamente y que el contador está a cero.
- Incremento del contador: en este test comprobamos que el contador aumenta en uno cada vez que se hace click en el botón.
- Label correcto: en este test comprobamos que el componente muestra el label correctamente.
  Ejecución de los test

Para ejecutar los test, simplemente tenemos que ejecutar el comando npm test en la terminal. Esto ejecutará todos los test y mostrará los resultados en la consola.

Es importante tener en cuenta que los test deben estar ubicados en la carpeta src/tests y deben tener la extensión .test.tsx para que sean reconocidos por Jest.

Además, es recomendable seguir las buenas prácticas de testing, como escribir test pequeños y enfocados, aislar los test para evitar dependencias entre ellos y utilizar nombres descriptivos para los test.
