# REPASO DEL MÓDULO 3 | COHORTE FT42b 📆

```
 _____         _                  _            
|  ___|       (_)                | |           
| |__   _ __   _  ___   ___    __| |  ___  ___ 
|  __| | '_ \ | |/ __| / _ \  / _` | / _ \/ __|
| |___ | |_) || |\__ \| (_) || (_| ||  __/\__ \
\____/ | .__/ |_||___/ \___/  \__,_| \___||___/
       | |                                     
       |_|                                     
```

La siguiente es sólo una guía, tienen libertad de modificar lo que quieran.

La idea es practicar y llegar con todo al CheckPoint !!!

Con mucho 💛 para la Cohorte FT42b

Ariel Romero...
______

## Objetivos
Desarrollar el servidor de una ToDo App, mediante la cual se repasarán los temas vistos durante el módulo 3.

## Estructura del proyecto
Se entrega un boilerplate con la siguiente estructura:

```
/ 08-todoapp
    / src
        / controllers
        / routes
        / utils
          app.js
      index.js
```
## 1. Instalar las dependencias necesarias y crear script
- express
- nodemon
- morgan (opcional)
```bash
npm install express morgan
npm install --save-dev nodemon
```
- Crear el script en el package.json para poder levantar servidor con nodemon
```json
"scripts": {
    "start": "nodemon ./index.js"
```

## 2. Levantar servidor
- Modifica los archivos necesarios para levantar el servidor.
- Crea un servidor modularizado.
  - El archivo "index.js" sólo icluirá el ".listen"

## 3. Creando las rutas principales
- Modularizar cada ruta principal en un archivo distinto.
- Utilizaremos las siguientes rutas principales.
  - localhost:3001/user
  - localhost:3001/episode

## 4. Configurando Middlewares
- Configura los Middlewares necesarios.
- No olvides utilizar `app.use(express.json())`
- También puedes incluir la configuración de CORS

```js
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	res.header( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE' );
	next();
});
```

## 5. Estructura de Episodes
- Crearemos y exportaremos dentro de la carpeta "utils" el archivo "allEpisodes.js", y dentro de este archivo la variable "allEpisodes" (no olvides exportarlo...).
  - Será un array, donde almacenaremos todos los "episodes".
    - Nuestros episodes tendrán la siguiente estructura:
```js
allEpisodes = [
  {
    name: "Rick",
    email: "rick@gmail.com",
    password: "1234",
    episodes: [
      {
        id: "FechaDeCreación",
        name: "Nombre del Episodio",
        episode: "Season 01 - Episode 02",
        completed: false || true
      }
    ]
  }
]
```
- Tomaremos por id del owner su mail.
- Cada "episode" se almacenará dentro del array "episodes".
- El id de cada "episode" será la fecha de posteo.

## 6. Ruta POST /user
- Recibe por body los datos necesarios: name, email y password.
  - Valida que no se haya registrado el email ingresado.
  - Crea un nuevo objetos con los datos recibidos del usuario.
  - Agrega el objeto creado al array "episodes".
  - Responde con status 200 y el objeto creado.

## 7. CRUD de episodes
- Create: Crear
- Read: Leer
- Update: Actualizar
- Delete: Borrar

### POST /episode/:email
- Recibe los datos del episode por body y el id del usuario (email) por params.
- Si el usuario existe:
  - Crea un nuevo "episode" y lo agrega al array de "episodes" del usuario.
  - Recuerda que no recibiremos el "id" del episodio, se lo asignaremos nosotros. La propiedad "completed" se inicializará en true.
  - Devuelve el array de "episodes" del usuario.
- Si el usuario no existe, devuelve un mensaje indicativo.

### GET /todos/:email?id=idDelEpisodio
- Recibe el id (email) del usuario por params.
- Recibe el id del episode por query.
- Si existe el usuario:
  - Si recibe por query el id del episode, devuelve ese episode.
  - Si no recibe por query el id del episode, devuelve el array de "episodes" del usuario.
  - Si no encuentra nada, devuelve un mensaje indicativo.

### PUT /episode/:email
- Recibe por params el id del usuario (email).
- Recibe por body un id y nuevos datos del episode: name y episode.
- Busca si existe el usuario con el email recibido.
  - Busca si existe el "episode" con el "id" enviado y modifica su "name" y "episode" por los datos recibidos recibido.
  - Si no recibe los datos esperados envía un mensaje indicativo.
- Retorna un array con todas las todos del usuario.

### DELETE /episode/:email/:id
- Recibe por params el email del usuario y el id del episode.
  - Borra el "episode" si es que la encuentra.
  - Si no encuentra episode que borrar envía mensaje indicativo.

## 8. Extras
- Crear ruta para validar credenciales de usuario:
  - email y password
- Crear función que encuentre los episodios del usuario, modularizando esta tarea que realizamos en muchos de los controllers.
- Crear ruta PUT /episode/:email/:id
  - Recibe por params el email del usuario y el id del episode.
    - Cambia la propiedad "completed" del episode a true (si es que la encuentra).
    - Devuelve el arreglo de todos los episodios del usuario.
    - Si no encuentra el episode, devuelve un mensaje indicativo.
- Agregar otras rutas con nuevas funcionalidades.

## 9. Extra - AXIOS
- Crear ruta "/episodes/api/:email/:id"
  - Se envía el id de usuario (email) y un id (numérico) por params.
  - Buscar en la api de Rick & Morty el episodio con el id indicado y agregarlo al array episodes del usuario, gruardando sólo el id, name y episode.
  - Utilizar axios y la siguiente url:
    - `https://rickandmortyapi.com/api/episode/${id}`

_____

## Configuración de GIT 

- Podemos revisar nuestras credenciales ingresando por consola:
```bash
git config --list
```
- Configurando nuestras credenciales:
  - Por ejemplo:
    - Si nuestro usuario es CohorteFT38b
    - Y nuestro email es: ejemplo@gmail.com
```bash
git config --global user.name "CohorteFT38b"
git config --global user.email ejemplo@gmail.com
```

- Y para subir nuestros cambios a GitHub:
```bash
git add .
git commit -m "aquí nuestro comentario"
git push
```

⚠️ NO OLVIDAR CHEQUEAR QUE LOS CAMBIOS SE REFLEJEN EN EL REPO DE GITHUB ⚠️

_____

# ÉXITOS 👍

