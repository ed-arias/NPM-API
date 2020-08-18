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
