// Aplicación básica en Node.js
// Registro y consulta simple de datos

const usuarios = [];

function registrarUsuario(nombre) {
    usuarios.push(nombre);
    console.log("Usuario registrado:", nombre);
}

function listarUsuarios() {
    console.log("Lista de usuarios:");
    usuarios.forEach((u, i) => {
        console.log(i + 1, u);
    });
}

// Ejecución de ejemplo
registrarUsuario("Juan");
registrarUsuario("María");
listarUsuarios();
