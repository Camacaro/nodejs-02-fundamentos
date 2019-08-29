let empleados = [{
	id:1,
	nombre:'Jesus'
},{
	id:2,
	nombre:'David',
},{
	id:3,
	nombre:'Jose'
}];

let salarios = [{
	id:1,
	salario:1000
},{
	id:2,
	salario:2000
}];

let getEmpleado = (id, callback) => {
	
	let empleadoDB = empleados.find(empleado => empleado.id === id);
	
	if(!empleadoDB){
		callback(`No existe un empleado con el ID ${id}`);
	}else{
		callback(null, empleadoDB);
	}
};

let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find( (salario) => salario.id === empleado.id );

	if(!salarioDB){
		console.log(`No se encontró un salario para el empleado ${empleado.nombre}`);
	}else{
		let empladoSalario = {nombre:empleado.nombre, salario:salarioDB.salario}
		callback(null, empladoSalario);
	}
};

getEmpleado(1, (err, empleado)=>{
	if(err){
		return console.log(err);
	}
	console.log(empleado);
});

getSalario(empleados[1], (err, empladoSalario)=>{
	if(err){
		return console.log(err);
	}
	console.log(empladoSalario);
} );

getEmpleado(4, (err, empleado)=>{
	
	if(err){
		return console.log(err);
	}
	
	getSalario(empleado, (err, empladoSalario)=>{
		if(err){
			return console.log(err);
		}
		console.log(empladoSalario);
	} );

});