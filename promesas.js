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

//si utilizo promesas solo recibe un parametro
let getEmpleado = (id) => {

	return new Promise( (resolve, reject)=>{

		let empleadoDB = empleados.find(empleado => empleado.id === id);
	
		if(!empleadoDB){
			reject(`No existe un empleado con el ID ${id}`);
		}else{
			//solo se devuelve un parametro si quiero enviar mas de uno tengo que hacerlo en fomar de objecto {nombre:data1, nombre2:data2}
			resolve(empleadoDB);
		}	

	} );	
	
};

let getSalario = (empleado) => {

	return new Promise( (resolve, reject) => {
		let salarioDB = salarios.find( (salario) => salario.id === empleado.id );

		if(!salarioDB){
			reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
		}else{
			let empladoSalario = {nombre:empleado.nombre, salario:salarioDB.salario}
			resolve(empladoSalario);
		}
	} );
	
};

getEmpleado(3).then(
	//este empleado es el nombre de la variable que recibira el resolve, utilizo la funcion flecha para hacer algo con esa variable
	empleado => {
		//console.log('Empleado de BD', empleado);
		getSalario(empleado).then(
			(empladoSalario) => {
				console.log(`El salario de ${empladoSalario.nombre} es ${empladoSalario.salario}$`);
			},
			(err) => {
				console.log(err);
			}
		);
	},
	(err) => {
		console.log(err);
	}
	
);