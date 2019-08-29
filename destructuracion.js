let deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre: function () {
		return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;	
	}
};
/*
	getNombre: function () {
		return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;	
	}
	ES2016
	getNombre() {
		return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;	
	}
*/
//console.log(deadpool.getNombre());

//destructuracion, es para declarar variables extrayendola de un objeto
//let {nombre, apellido, poder} = deadpool;
//console.log(nombre, apellido, poder);
//cambiando nombre de la variable
let {nombre:primerNombre, apellido, poder} = deadpool;
console.log(primerNombre, apellido, poder);