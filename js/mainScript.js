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
    constructor(nombre, tipo, cupos, precio, fecha, id){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cupos = parseInt(cupos);
        this.precio = parseInt(precio);
        this.fecha = parseInt(fecha);
        this.id = parseInt(id);
    }

    generadorId(array){
        this.id = array.length;
    }   

}

class Reserva{
    constructor(idReserva, nombreReservable, nombreUsuario, apellidoUsuario, fecha, hora, cantidadPersonas){
        this.idReserva = parseInt(idReserva);
        this.nombreReservable = nombreReservable;
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
    new Reservable("Lo de Lita", "Restaurant", 20, 500, 02052022, 1),
    new Reservable("Nirvana live Unpluged", "Recital", 1500, 5000, 11102022, 2),
    new Reservable("El club de la papa frita", "Restaurant", 50, 250, 03112022, 3),
    new Reservable("El Row", "Fiesta Electonica", 800,400, 05112022, 4),
    new Reservable("Stand up", "Teatro", 200, 1560,05122022, 5),
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

function mostrarReservables(array){
    let dato = " ";
    array.forEach(elemento => {dato += "\n Nombre: " + elemento.nombre + "\n Tipo: " + elemento.tipo + "\n Cupos: " + elemento.cupos + "\n Fecha: " + elemento.fecha});
    return dato;
}

function reservar(nombreReservable, nombreUsuario, apellidoUsuario, fecha, hora, cantidadPersonas){


}

// ------------------------------------ MAIN ------------------------------------------------

//Login

/* let continuar = true;

const loginName = document.querySelector("#loginName");
loginName.onchange = ()=>{
    let usuario = loginName.value;
    console.log(usuario);
}

const loginPassword = document.getElementById("loginPassword");
loginPassword.onchange = ()=>{
    let password = loginPassword.value;
    console.log(password);
} */

/* const btnSubmitLogin = document.querySelector("#btnSubmitLogin");
btnSubmitLogin.onclick = () => {
    for (let i = 2; i >= 0; i--) {
        if (chequeoLogin(usuario, contraseña) === true) {
            alert("Bienvenid@ " + usuario);
        } else if (i > 0) {
            alert("Usuario o contraseña incorrectos, te quedan " + i + " intentos");
        } else {
            alert("Ingreso fallido, te quedaste sin intentos");
        }
    }
} */




/* while (continuar) {
    switch (opcion) {
        case 1:
            for (let i = 2; i >= 0; i--) {
                let usuario = prompt("Ingresá tu usuario:");
                let contraseña = prompt("Ingresá tu contraseña");
                if (chequeoLogin(usuario, contraseña) === true) {
                    alert("Ingreso aceptado");
                    // Menú de reservas
                    let opcionReservas = parseInt(prompt("Menú de reservas\n 1. Reservar\n 2. Cancelar reserva"));
                    switch (opcionReservas) {
                        case 1:
                            alert(mostrarReservables(reservables));
                            break;
                        case 2:

                            break;
                        default:
                            alert("Opción ingresada incorrecta")
                            break;
                    }
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
    } */

//Crear cards de Reservables
contenedorTarjetas = document.getElementById("contenedorTarjetas");

for (const reservable of reservables) {
    let card = document.createElement("div");
    card.id = reservable.id;
    card.innerHTML = `<div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${reservable.nombre}</h5>
                <!-- Product price-->
                $${reservable.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <a id="btnReservar" class="btn btn-outline-dark mt-auto" href="#">Reservar</a>
            </div>
        </div>
    </div>
</div>`;
    contenedorTarjetas.append(card);
}


