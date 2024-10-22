
# Counter App

En este proyecto se ha desarrollado un sencilla aplicación web utilizando el framework de React para la web [Next](https://nextjs.org/). El objetivo general es utilizar ``useState`` (hook que React).

## Tecnologías utilizadas

 - [React](https://es.react.dev/)
 - [Next](https://nextjs.org/)
 - [tailwindcss](https://tailwindcss.com/)


## Consideraciones técnicas

Se optó por utilizar Next debido a su declarativa y eficiente forma de crear interfaces de usuario, así como por su gran comunidad y ecosistema de herramientas. El hook ``useState`` fue la elección natural para gestionar el estado local del contador, ya que es sencillo de usar y se integra perfectamente con el paradigma de React.

**Para el futuro, se podrían explorar las siguientes mejoras:**

- **Personalización:** Permitir que el usuario pueda seleccionar un tema.

- **Persistencia de datos:** Guardar el valor del contador en el almacenamiento local del navegador para que se mantenga al recargar la página.


## Screenshots

![App Screenshot](https://drive.google.com/file/d/1PJLdQsBbwecq8HxtxzPJ_5P4zrRLsaDT/view?usp=sharing)


## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/johndev983/counter-app.git
```

Ir al directorio del proyecto

```bash
  cd counter-app
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run start
```

Iniciar el servidor con [Docker](https://docs.docker.com/)

```bash
  docker build -t next-counter-app .
```


## Demo

[https://counter-app.vercel.app](https://counter-app-gold-seven.vercel.app/)


## Authors

- [@johndev983](https://github.com/johndev983)


## Support

*Para obtener ayuda, envíe un correo electrónico a [johndev983@gmail.com.](mailto:johndev983@gmail.com)*