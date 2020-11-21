# Prueba Tecnica - Consumo de la API Spotify 👻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Primeros pasos` 😅

Una vez haya clonado o descargado el proyecto en la linea de comandos ubiquese dentro de la carpeta client, una vez alli escriba npm install, esto descargara todas las
dependencias necesarias para que el proyecto funcione.

Una vez alla terminado de instalar escriba `npm run start` o  `yarn start`

## Agrege los datos

Si por algun motivo no funciona con los datos que estan ahí, entre a este [sitio](https://developer.spotify.com/dashboard/applications/)
Y registre una nueva aplicacion si no sabe como siga esta guia 

## Registre su aplicación:
En el panel, haga clic en CREATE A CLIENT ID.

Escriba Nombre de aplicación y Descripción de la aplicación y, a continuación, haga clic en CREAR. La aplicación está registrada y se abre la vista de la aplicación.
En la vista de la aplicación, haz clic en Editar configuración para ver y actualizar la configuración de la aplicación.

Edit Settings View

Nota: Encuentre su ID de cliente y secreto de cliente; los necesita en la fase de autenticación.

El identificador de cliente es el identificador único de la aplicación.
Client Secret es la clave que pasa en llamadas seguras a las cuentas de Spotify y a los servicios de API web. Almacene siempre la clave secreta de cliente de forma segura; nunca revelarlo públicamente! Si sospecha que la clave secreta se ha visto comprometida, vuelva a generarla inmediatamente haciendo clic en el vínculo de la vista de configuración de edición.
Lista blanca de un URI de redirección
En Uri de redirección, escriba una o varias direcciones que desee incluir en la lista blanca con Spotify. Este URI permite que el servicio de autenticación de Spotify vuelva a iniciar automáticamente la aplicación cada vez que el usuario inicia sesión.

![Dashboard](https://developer.spotify.com/assets/dashboardeditsettings.png)

Ese ID peguelo en el archivo '.env' en el apartado 'REACT_APP_CLIENT_ID' `REACT_APP_CLIENT_ID` `.env`

GUARDAR los cambios; la configuración de la aplicación está disponible para su revisión en el panel.

## Como funciona la API de Spotify

![imagen](https://developer.spotify.com/assets/AuthG_AuthoriztionCode.png)


### `npm run start` o  `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` o `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
