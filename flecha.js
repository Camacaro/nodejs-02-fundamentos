
	return a + b;
}*/

//(a,b) = argumentos
//=> = referencia a lo uqe hara
//a + b = el return
//el return lo puedo hacer asi ya que esta en una unica linea
let sumar = (a, b) => a + b;
//mas de una linea
/*
let sumar = (a, b) => {
	return a + b;	
};
*/

/*function saludar(){
	return 'Hola Mundo';
}*/


let saludar = () => 'Hola Mundo';
//si es un solo parametro se pueden obviar los parentesis
let saludarNombre = nombre => `Hola ${nombre}`;

//cuando se utiliza el objeto this hay que quitar la flecha ya que this apunta a una vaariable fuera de la funcion
let deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre() {
		return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;	
	}
};

console.log(deadpool.getNombre());