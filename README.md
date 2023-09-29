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
Desarrollar el servidor de una App que permita administrar episodios, mediante la cual se repasarán los temas vistos durante el módulo 3.

## Estructura del proyecto
Se entrega un boilerplate con la siguiente estructura:

```
/ m3-repaso-ft42b
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

## 5. Estructura de allUsers
- Crearemos y exportaremos dentro de la carpeta "utils" el archivo "allUsers.js", y dentro de este archivo la variable "allUsers" (no olvides exportarlo...).
  - Será un array, donde almacenaremos todos los "usuarios".
    - Nuestros usuarios tendrán la siguiente estructura:
```js
allUsers = [
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
- Tomaremos por id del usuario su mail.
  - Cada usuario tendrá la propiedad "episodes" que será un array.
    - Cada "episode" será un objeto, y se almacenará dentro del array "episodes".
    - Tomaremos la propiedad "name" y "episode" de la Rick&Morty API.

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

### POST /episode/:email/:id
- Tomaremos la propiedad "name" y "episode" de la Rick&Morty API.
  - Instalaremos "axios":
```bash
npm install axios
```
- Recibe por params el id del usuario (email), y el id del episodio que deseamos agregar.
- Si el usuario existe:
  - Realiza la petición "axios" a la siguiente url:
    - `https://rickandmortyapi.com/api/episode/${id}`
  - Crea un nuevo "episode" con las propiedades:
    - id: podemos utilizar la que llega por params (de tipo string)
    - name: toma el valor desde lo recibido por la API
    - episode:
    - completed: que se inicializa en false
  - Agrega el episodio creado al array de "episodes" del usuario.
  - Devuelve el array de "episodes" del usuario.
- Si el usuario no existe, devuelve un mensaje indicativo.

### GET /episode/:email?id=idDelEpisodio
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

### Crear ruta para validar credenciales de usuario
  - email y password

### Crear función "getActualUser"
- Modularizar la tarea que repetimos en cada ruta:
- Creamos una carpeta "functions" y allí dentro el archivo "getActualUser.js".
  - Dentro de este archivo creamos y exportamos la función "getActualUser".
  - La función "getActualUser":
    - Recibe por parémetro "req y res"
    - Verifica que el usuario se encuentre registrado (que exista el mail recibido por params).
    - Busca los episodios del usuario y los retorna.
    - En caso de no encontrar usuario registrado retorna un mensaje indicativo.
- Utilizamos la función creada en los controladores de "episodes"
### Crear ruta PUT /episode/:email/:id
- Recibe por params el email del usuario y el id del episode.
  - Cambia la propiedad "completed" del episode a true (si es que la encuentra).
  - Devuelve el arreglo de todos los episodios del usuario.
  - Si no encuentra el episode, devuelve un mensaje indicativo.
- Agregar otras rutas con nuevas funcionalidades.
### Modularizar controllers
- Creando dentro de la carpeta "controllers":
	- Una carpeta "user"
	- Una carpeta "episodes"
	- Un archivo "index.js" desde donde exportaremos todos los controllers
### Retornar errores y no solo mensajes
- Investiga acerca de throw Error() para devolver errores.

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

