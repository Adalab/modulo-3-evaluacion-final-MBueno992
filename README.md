# Evaluación final módulo 3

## Registro de personajes de Harry Potter

Este ejercicio consiste en desarrollar un buscador de personajes de la saga Harry Potter.
Para ello primero debemos asegurarnos que estamos en la casa adecuada (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) aunque también tenemos dos opciones extras que son _otros magos_ para aquellos que no son estudiantes de Hogwarts o _muggles_ para aquellos personajes de la saga que no son magos.

Además podremos filtar también por género, mencionar que todos los filtros están conectados entre sí, y que disponemos de un botón de RESET para poder vaciar los campos de una vez.

##Diseño del proyecto

Trabajando siempre bajo la metodología _MobileFirst_ se ha realizado un diseño que se vaya adaptando a las pantallas de diferentes dispositivos.

![versión mobile](/public/Mobile.PNG)
![versión mobile detail](/public/mobileDetail.PNG)
![versión desktop](/public/desktop.PNG)

> **NOTA**: Las medidas utilizadas para diferenciar los dispositivos son 320px para móvil, 768px para tablet y 1200px para desktop.

### Herramientas utilizadas 🛠️

Para la realización de este proyecto se ha trabajado con **REACT** y **VITE** para la ejecución de tareas. Además como en otras ocasiones también se ha utilizado _node_, _SASS_ y _flexbox_.

### Pasos a seguir si queremos arrancar el proyecto desde tu local ⚙️

1. Descarga el proyecto.

- Recuerda, descargar no es clonar, ya que si lo clonas no podrás añadir commits.

1. **Abre una terminal** en la carpeta raíz donde le hayas guardado.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```
npm install
```

> **NOTA**: Esto generará una carpeta llamada node_modules y sólo hay que ejecutarlo una vez. En el momento que aparezca la carpeta ya no será necesario volver a ejecutarlo.

1. Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **_El proyecto hay que arrancarlo cada vez que te pongas a programar._** Para ello ejecuta el comando:

```
npm run dev
```

Este comando:

- **Abre una ventana del navegador y muestra la página web**..

Después de ejecutar `npm run dev` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Estructura de carpetas

La estructura de carpetas en el proyecto es la siguiente:

```
public

src
 ├─ components
 |  ├─ Characters
 |  └─ Filters
 ├─ images
 ├─ scss
 |  ├─ core
 |  └─ layout
 └─ services

```

> ¡Espero que el aporte os haya gustado!
