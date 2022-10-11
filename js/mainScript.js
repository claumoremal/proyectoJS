//Declaración de Objetos

class Usuario{
    constructor(nombre, apellido, mail, userId, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.userId = userId;
        this.edad = parseInt(edad);
    }
}

class Reservable{
    constructor(nombre, tipo, cupos, id){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cupos = cupos;
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
}

