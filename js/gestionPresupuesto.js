// He consultado el archivo con las soluciones porque habían cosas que no entendía el porqué
// de los errores, algunas eran simples espacios que faltaban en el texto, o las comillas que había 
// puesto mal. Y otras que no he conseguido entender.

// Variable global
let presupuesto = 0;

function actualizarPresupuesto(num) {
    if(num >= 0){
        presupuesto = num;
        return presupuesto;
    }
    else{
        console.log("No se puede introducir un número negativo.");
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor) {
    
    this.descripcion = descripcion;
    this.valor = (valor >=0) ? valor : 0;  
    // No entiendo porqué no puedo poner simplemente this.valor = valor; 
    // si ya compruebo en el método actualizar valor si es un número negativo.

    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
        // Tenía puesto el mensaje en un console.log y me daba error ahí.
    };
    this.actualizarDescripcion = function(descripcion){
        this.descripcion = descripcion;
        return descripcion;
    };
    this.actualizarValor = function(valor){
        if(valor >= 0){
            this.valor = valor;
            return valor;
        }
        else{
            valor = this.valor;
            return valor;
        }
    };
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
