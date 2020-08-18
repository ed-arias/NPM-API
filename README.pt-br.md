[![Readme Spanish](https://img.shields.io/badge/README-es--CO-blueviolet?style=for-the-badge)][README.es-co.md]
[![Readme English](https://img.shields.io/badge/README-EN--US-blue?style=for-the-badge)][README.md]

You can find Erick Wendel's courses [here](https://cursos.erickwendel.com.br).

[README.es-co.md]:https://github.com/ed-arias/NPM-API/blob/master/README.es-co.md
[README.pt-br.md]:https://github.com/ed-arias/NPM-API/blob/master/README.pt-br.md
[README.md]:https://github.com/ed-arias/NPM-API/blob/master/README.md

# Imersão em desenvolvimento de APIs com Node.js By #NodeBR!
## Module 0 - Introduction
### Starting a Node.js project

1. In this lesson I learned to create a new project in Node.js using:

- `npm init -y`: to create the basic structure of the project accepting all the defaul settings.
- `touch index.js`: to crate the main file.
- Writing a simple `console.log()` in the main file.
- And finally running the project with `node index.js`.

2. To speed up the console commands typing we can create _predefine scripts_ modifying the `"scripts"` member of the `package.json` file.

  ```json
    "scripts": {
      "dev": "node index.js"
    }
  ```

  This way we created a `dev` script we can run with the command `node run dev`.

3. As a final thought of this class I can say this was a very simple guide to star up your _Hello World!_ application with Noje.js