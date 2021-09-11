// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Establecer conexión del socket.io cliente con el servidor
// ----------------------------------------------------------------------------------------------------------------------------------------------------
var socket = io(); // Uso "var" y no "let" para aumentar la compatibilidad con los navegadores

socket.on('connect', function() { // Establece la conexión con el socket.io del servidor. Tiene 2 parámetros, el 1ro tal cual literal 'connect' y el 2do un callback que ejecuta su contenido (no usu función de flecha para aumentar compatibilidad ya que no sé si soporta ES6). El método "on()" se emplea para escuchar información (siempre estará escuchando o atento a la conexión, en este caso con el servidor)
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() { // Se ejecuta cuando detecta que se perdió la conexión con el socket.io del servidor. Tiene 2 parámetros, el 1ro tal cual literal 'disconnect' y el 2do un callback que ejecuta su contenido. El método "on()" se emplea para escuchar información (siempre estará escuchando o atento a la conexión, en este caso estará atento a una desconexión del servidor)
    console.log('Perdimos la conexión con el Servidor');
});
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// EMITIR o ENVIAR INFORMACIÓN (emitir un evento para que sea escuchado por el servidor)
// ----------------------------------------------------------------------------------------------------------------------------------------------------
socket.emit('enviarMensaje', { // Emite un evento (envía información) mediante el método "emit()". El 1er parámetro contien el nombre del evento que se emite "enviarMensaje", el 2do es un objeto con el contenido que emito (envío) en el evento y el 3ro un callback que tiene como parámetro la respuesta "resp" devuelta por el servidor
    usuario: 'Pepe',
    mensaje: 'Hola soy Pepe'
}, function(resp) { // Función callback que se ejecuta para tener una retroalimentación del lado del servidor. Tiene como parámetro la respuesta devuelta por el servidor al recibir este evento enviado por el usuario (cliente)
    console.log('Respuesta del Servidor: ', resp);
});
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// ESCUCHAR o RECIBIR INFORMACIÓN (escuchar un evento recibido)
// ----------------------------------------------------------------------------------------------------------------------------------------------------
socket.on('enviarMensaje', function(mensaje) { // Con el método "on()" puedo escuchar los eventos emitidos. El 1er parámetro es el nombre del evento a escuchar "enviarMensaje" y el 2do es un callback que ejecuta su contenido y tiene como parámetro en este caso el "mensaje" (objeto) enviado dentro del evento "enviarMensaje"
    console.log(mensaje);
});