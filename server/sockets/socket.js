const { io } = require('../server'); // Importar la constante "io" del archivo '../server.js' que es quien maneja la comunicación del socket.io en el servidor

io.on('connection', (client) => { // Establece la conexión con el socket.io del cliente. Tiene 2 parámetros, el 1ro tal cual literal 'connection' y el 2do un callback que ejecuta su contenido y pasa como parámetro los datos del cliente "client" (los datos de la PC cliente que está conectada)
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido' }); // Con el método "emit()" puedo emitir o enviar información mediante eventos. El 1er parámetro es el nombre del evento a emitir "enviarMensaje" y el 2do es un objeto con el contenido emitido en el evento "enviarMensaje" en este caso

    client.on('disconnect', () => { // Con el método "on()" puedo escuchar si el usuario (client) se desconectó. El 1er parámetro tal cual literal 'disconnect' y el 2do es un callback que ejecuta su contenido cuando detecta que el usuario se desconecta
        console.log('Usuario Desconectado');
    });

    client.on('enviarMensaje', (data, callback) => { // Con el método "on()" puedo escuchar los eventos emitidos por los usuarios (client). El 1er parámetro es el nombre del evento a escuchar "enviarMensaje" y el 2do es un callback que ejecuta su contenido y tiene como parámetro en este caso el "mensaje" (objeto) enviado por el usuario dentro del evento "enviarMensaje" y un callback que se ejecutará según la condición que se cumpla

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // Con el método "broadcast" puedo emitir un evento "enviarMensaje" a todos los usuarios conectados al socket del servidor

        // if (mensaje.usuario) { // Si existe el "mensaje.usuario", en otras palabras, si en el evento emitido por el cliente viene dentro del objeto la clave "usuario":
        //     callback({ resp: 'Todo salió OK' }); // Ejecuta la función "callback()" con el sgte objeto como parámetro
        // } else {
        //     callback({ resp: 'Todo salió MAL!!!!!!!!!!' }) // Ejecuta la función "callback()" con el sgte objeto como parámetro
        // }
    });
})