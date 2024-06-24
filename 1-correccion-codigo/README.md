# README.md

### Decisiones de Desarrollo

Este proyecto contiene la corrección de un código en TypeScript que obtiene datos de una API. Se han realizado las siguientes mejoras:

1. Corrección de la interpolación de la cadena en el `fetch`, cambiando comillas simples por backticks (`) para que funcione correctamente.
2. Cambio del tipo de `userId` en `fetchUserData` de `string` a `number`, para que coincida con el tipo en la interfaz `User`.
3. Nombre de la propiedad en minúsculas: Corrección del uso incorrecto de `user.name` en lugar de `user.Name`.
4. Manejo de errores en la llamada `fetch`.
5. Se ha utilizado la instrucción if (!response.ok) para verificar si la propiedad ok de la respuesta es true. Esta propiedad indica si la solicitud HTTP se completó correctamente.

Beneficios de los cambios:

Los cambios realizados hacen que el código sea más robusto y manejable de errores.
En caso de que la API devuelva un error, el código ahora lo detecta y lo maneja de forma adecuada.
Esto proporciona una mejor experiencia de usuario y facilita la depuración de problemas.

### Repositorio

El repositorio se encuentra en GitHub y se ha creado una rama para cada prueba. La rama `main` contiene la estructura básica del proyecto. Las ramas para cada prueba se han mergeado a `main` cuando ha sido necesario.

### Tiempo de Dedicación

El tiempo de dedicación para esta prueba ha sido de aproximadamente 40 minutos.
