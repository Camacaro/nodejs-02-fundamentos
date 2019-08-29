/**
*	Async Await
El await solo lo puedo usar dentro de una function async, promise
*/

//funcion asincrona, para formar una promesa
/*let getNombre = async () => {
	
	//el throw new Error, es el reject
	//throw new Error('No existe un nombre para este usuario');

	//return es el resolve
	return 'Jesus';
};*/

//Lo de arriba es igual a esta funcion
/*let getNombre = () => {
	return new Promise ( (resolve, reject) => {
		resolve('Jesus');
	});
}*/

/*
let getNombre = async function() => {
	return new Promise ( (resolve, reject) => {
		
		setTimeout( ()=>{
			resolve('Jesus');
		},3000);

	});
}
*/

let getNombre = () => {
	return new Promise ( (resolve, reject) => {
		
		setTimeout( ()=>{
			resolve('Jesus');
		},3000);

	});
}



let saludo = async () => {
	
	//Esto es para volver la funcion en forma de sincrona que espere hasta resolver con await
	let nombre = await getNombre(); 
	return `Hola ${nombre}`;
}


//console.log(getNombre());

/*getNombre().then( nombre => {
		console.log(nombre);
	})
	.catch( e => {
		console.log('Error de ASYNC: ', e)
	});*/

saludo().then(mensaje => {
	console.log(mensaje);
})