//Declaración de Objetos

class Usuario{
    constructor(nombre, apellido, mail, userId, contraseña, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.userId = userId;
        this.contraseña = contraseña;
        this.edad = parseInt(edad);
    }

}

class Reservable{
    constructor(nombre, tipo, cupos, fecha, id){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cupos = parseInt(cupos);
        this.fecha = parseInt(fecha);
        this.id = parseInt(id);
    }

    generadorId(array){
        this.id = array.length;
    }
}

class Reserva{
    constructor(idReserva, nombreUsuario, apellidoUsuario, fecha, hora, cantidadPersonas){
        this.idReserva = parseInt(idReserva);
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.fecha = parseInt(fecha);
        this.hora = parseInt(hora);
        this.cantidadPersonas = parseInt(cantidadPersonas);
    }

    generadorIdReserva(array){
        this.idReserva = array.length;
    }
}


// Declaración de Arrays

const usuarios = [
    new Usuario("Claudio", "Moreno", "claumoremal@gmail.com", "clau", "hola1234", 32),
    new Usuario("Renata", "Maldonado", "renamal@gmail.com", "ren", "hola1234", 21),
    new Usuario("Antonella", "Acevedo", "anto@gmail.com", "anto", "hola1234", 28),
];

const reservables = [
    new Reservable("Lo de Lita", "Restaurant", 20, 02052022, 1),
    new Reservable("Nirvana live Unpluged", "Recital", 1500, 11102022, 2),
    new Reservable("El club de la papa frita", "Restaurant", 50, 03112022, 3),
    new Reservable("El Row", "Fiesta Electonica", 800, 05112022, 4),
    new Reservable("Stand up", "Teatro", 200, 05122022, 5),
];

const reservas = [];

//Declaración de funciones

function chequeoLogin(usuarioIngresado,contraseñaIngresada){
    let resultadoUsuario = usuarios.some((usuario)=>usuario.userId==usuarioIngresado);
    let resultadoContraseña = usuarios.some((usuario)=>usuario.contraseña==contraseñaIngresada);
    if(resultadoUsuario==true && resultadoContraseña==true){
        return true;
    } else{
        return false;
    }
}


// ------------------------------------ MAIN ------------------------------------------------

//Login
let continuar = true;

while (continuar) {
    let opcion = parseInt(prompt("Bienvenido al sistema de reservas, que desea hacer: \n 1. Login \n 2. Registrarse\n 3. Registrar Comercio\n 4. Salir"));
    switch(opcion){
        case 1:
            for (let i = 2; i >= 0; i--) {
                let usuario = prompt("Ingresá tu usuario:");
                let contraseña = prompt("Ingresá tu contraseña");
                if (chequeoLogin(usuario, contraseña) === true) {
                    alert("Ingreso aceptado");
                    break
                } else if (i > 0) {
                    alert("Usuario o contraseña incorrectos, te quedan " + i + " intentos");
                } else {
                    alert("Ingreso fallido, te quedaste sin intentos");
                }
            }
            break;
        case 2:
                let ingresoUsuario = prompt("Ingresa tus datos (Nombre, Apellido, Mail, Nombre de usuario, Contraseña, Edad) separados con coma (,)");
                let datosUsuario = ingresoUsuario.split(",");                
                const nuevoUsuario = new Usuario(datosUsuario[0], datosUsuario[1], datosUsuario[2], datosUsuario[3], datosUsuario[4], datosUsuario[5],);
                usuarios.push(nuevoUsuario);
                console.log(usuarios);
            break;
        case 3:
                let ingresoComercio = prompt("Ingresa los datos (Nombre, Tipo, Cupos, Fecha) separados con coma (,)");
                let datosComercio = ingresoComercio.split(",");
                const nuevoComercio = new Reservable(datosComercio[0], datosComercio[1], datosComercio[2], datosComercio[3],);
                reservables.push(nuevoComercio);
                nuevoComercio.generadorId(reservables);
                console.log(reservables);

        case 4:
            continuar = false;
            break;
        default:
            alert("La opción ingresada no es correcta");
            break;
    }
    
}

/* continuar = true;

while(continuar == true){

} */



