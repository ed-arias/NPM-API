[![Readme Portuguese](https://img.shields.io/badge/README-pt--BR-brightgreen?style=for-the-badge)][README.pt-br.md]
[![Readme English](https://img.shields.io/badge/README-EN--US-blue?style=for-the-badge)][README.md]

Puedes encontrar los cursos de Erick Wendel [aquí][erick wendels courses].

[README.es-co.md]:https://github.com/ed-arias/NPM-API/blob/master/README.es-co.md
[README.pt-br.md]:https://github.com/ed-arias/NPM-API/blob/master/README.pt-br.md
[README.md]:https://github.com/ed-arias/NPM-API/blob/master/README.md
[erick wendels courses]: https://cursos.erickwendel.com.br

# Inmersión en desarrollo de APIs con Node.js By #NodeBR!
## Módulo 0 - Introducción
### Iniciando un proyecto Node.js

1. En esta lección aprendí a crear un nuevo proyecto en Node.js usando:

- `npm init -y`: para crear la estructura básica del proyecto aceptando todas las configuraciones predeterminadas.
- `touch index.js`: para crear el archivo principal.
- Escribir un simple `console.log()` en el archivo principal.
- Y finalmente ejecutar el proyecto con `node index.js`.

2. Para acelerar la escritura de los comandos de la consola, podemos crear _predefine scripts_ modificando el miembro `"scripts"` del archivo `package.json`.

   ```json
      "scripts": {
         "dev": "nodo index.js"
      }
   ```

   De esta manera creamos un script `dev` que podemos ejecutar con el comando `node run dev`.

3. Como conclusión de esta clase, puedo decir que ésta fue una guía muy simple para iniciar tu primera aplicación _Hello World!_ Con Noje.js

## Módulo 1 - Sincronía de funciones Javascript
### Aula 1 - Introducción al capítulo
1. En este video entendi a modo groso como funcionan los diferente componentes de Node.js y el flujo de datos entre ellos.<br>
   Tengo que revisar este capítulo para entender cada parte de la arquitectura con mayor detalle

   - Nuestra aplicación Javascript
   - El V8 Engine (virtual machine)
   - El node.js bindings (Node API): que es el encargado de optimizar el codigo Javascript y traducirlo a lenguage C/C++
   - La libreria LIBUV (ASYNC IO)
      - Event queue
      - Event loop
      - Worker threads

> **Material de Referencia**<br>
> - [Gerenciando o fluxo assíncrono de operações em NodeJS](https://imasters.com.br/desenvolvimento/gerenciando-o-fluxo-assincrono-de-operacoes-em-nodejs)

### Aula 2 - Entendiendo el ciclo de vida de aplicaciones Javascript
1. Funciones que dependen de ejecución externa seran ejecutadas en background
2. La forma en que tu código es escrito es diferente de la forma en que es ejecutado
3. Es importante mantener le orden de tu ejecucion para evitar problemas

### Aula 3 - Trabajando con callbacks
1. Vamos a crear un projecto para simular los llamados a BD y de esa manera generar errores de sincronia de las instrucciones con la funcion `setTimeout`.
   
   ```javascript
      setTimeout(function() {

      }, timeout);
     ```
2. Los valores `null`, `""` y `0` son equivalentes a `false`
3. En esta clase aprendimos que con las funciones `callback` solucionamos los problemas de sincronia,
   pero se genera otro problema que son las funciones anidadas tambien llamado como ***callback hell***

### Aula 4 - Introduccion a Promises
1. Entendiendo el ciclo de vida de las Promises
   - **Pending:** Estado inicial, todavia no terminó o aun no ha sido rechazado
   - **Fulfilled:** Cuando ejecutó todas las operaciones con éxito
   - **Rejected:** Cuando la operación falló

### Aula 5 - Refactorando los Callbacks a Promises
1. En esta clase aprendi a refactorar las funciones `callback` y convertirlas en *promises*. 
   Esta solución me parece mucho mas organizada y en la que se pueden controlar los errores de una manera mas sencilla.
2. Existe una forma de convertir las `callbacks` en `promises` con la importacion `const util = require("util")` así:
   
   ```javascript
      const obterEnderecoAsyc = util.promisify(obterEndereco)
   ```
   > Esta operacion se puede realizar siempre y cuando la funcion callback respete el estandar `return callback(error, dato)` 
3. Aunque las promises son mas faciles de trabajar tambien tenemos el problema de funciones anidadas

### Aula 6 - Introduccion a la resolucion de Promises con async/await
1. Promises - ASYNC/AWAIT
   - Facilita a visualizacion del flujo de funciones
   - **No** altera el performance de la aplicacion
   - Viene de C#
   - Usar apenas cuando se necesite tratar la respuesta de la llamada

### Aula 7 - Resolucion de promises con ASYNC/AWAIT 
1. En esta clase aprendi a trabajar con async/await y promises de manera que el flujo de datos es bastante parecido a java o C#
2. Aunque ya puedo controlar la sincronia de los datos puedo mejorar el rendimiento del programa.

   Por ejemplo:
   - Si `b` y `c` dependen de `a` entonces espero obtener `a` y luego calculo `b` y `c` al mismo tiempo.
   
   ```javascript
   const a = await getA()
   const d = await Promise.all([
            obterB(a.id),
            obterC(a.id)
        ])
   const b = d[0]
   const c = d[1]
   ```
### Aula 8 - Tranalhando com eventos com a classe EventEmitter
1. A promise vai servir para executar uma unica vez 
2. Os eventos a gente usa para ações continuas:
   - Manipular o click
   - Manipular arquivo, entre outros

## Módulo 2 - Manipulação de listas
### Aula 2 - Manipulando listas com For/ForIn/ForOf
1. 