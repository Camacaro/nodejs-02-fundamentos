/*setTimeout( () => {
	console.log('Hola mundo');
}, 3000);*/

//si id: id, se puede obviar para que tenga el mismo nombre que el parametro
let getUsuarioById = (id, callback) => {
	
	let usuario = {
		nombre:'Jesus',
		id
	}

	if(id === 20){
		callback(`El usuario con id ${id}, no existe en la db`);
	}else {
		callback(null, usuario);	
	}
	
};

getUsuarioById(20, (err, usuario)=>{
	
	if(err){
		return console.log(err);
	}
	console.log('Usuario de base de datos', usuario);
} );