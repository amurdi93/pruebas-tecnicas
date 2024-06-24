## Explicación del problema de rendimiento:

El componente ExpensiveComponent presenta problemas de rendimiento debido a que la función processData se está ejecutando en cada renderizado del componente, lo cual es innecesario ya que los datos no cambian con frecuencia. Esto significa que el proceso de transformar los datos se realiza repetidamente, incluso si los datos no han cambiado, lo que genera un impacto negativo en el rendimiento, especialmente cuando se manejan grandes conjuntos de datos.

## Solución propuesta:

Para optimizar el rendimiento del componente, se debe implementar una estrategia de memorización para evitar la ejecución innecesaria de la función processData. Se puede utilizar la función useMemo de React para memorizar el resultado de la función processData y solo recalcularlo cuando los datos de entrada cambien.

## Explicación de la solución:

Se importa la función useMemo de React.
Se define una variable processedData utilizando useMemo.
Se pasa la función processData como primer argumento a useMemo.
Se pasa un array de dependencias como segundo argumento a useMemo. En este caso, el array solo contiene la variable data. Esto significa que useMemo solo recalculará el resultado de processData si el valor de data cambia.
El resto del componente permanece sin cambios, utilizando la variable processedData memorizada para renderizar la lista de elementos.

## Beneficios de la solución:

Se elimina la ejecución innecesaria de la función processData, mejorando significativamente el rendimiento del componente, especialmente al manejar grandes conjuntos de datos.
La memorización garantiza que el componente solo se re-renderiza cuando los datos cambian, lo que reduce el consumo de recursos y mejora la experiencia del usuario.
El código es más limpio y fácil de entender, ya que se evita la repetición innecesaria de la lógica de procesamiento de datos.
