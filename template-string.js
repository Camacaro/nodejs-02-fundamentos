let nombre = 'Deadpool';
let real = 'Wade winston';

/*console.log(nombre+' '+real);
console.log(`${nombre} ${real}`);*/

/*let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;
//verificar si su valor y su identidad(tipo) son iguales
console.log(nombreCompleto === nombreTemplate);*/

function getNombre() {
	return `${nombre} ${real}`;
}
console.log(`El nombre de: ${getNombre()}`);