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

let getEmpleado = async (id) => {

	let empleadoDB = empleados.find(empleado => empleado.id === id);

	if(!empleadoDB){
		throw new Error (`No existe un empleado con el ID ${id}`);
	}else{
		return empleadoDB;
	}		
	
};

let getSalario = async (empleado) => {

	let salarioDB = salarios.find( (salario) => salario.id === empleado.id );

	if(!salarioDB){
		throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
	}else{
		let empladoSalario = {nombre:empleado.nombre, salario:salarioDB.salario};
		return empladoSalario;
	}
};

let getInformacion = async (id) => {
	
	let empleado 		= await getEmpleado(id);
	let salarioEmpleado = await getSalario(empleado);

	return `${salarioEmpleado.nombre} tiene un salario de ${salarioEmpleado.salario} $`;
};

getInformacion(2)
	.then( mensaje => console.log(mensaje))
	.catch(e => console.log(e));