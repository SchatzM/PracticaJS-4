// Práctica 07
// Creación de Objetos
// Brian Passos

'use strict';

//Primer objeto
var miCasa = {
	ubicacion: {
		ciudad: 'Palma',
		municipio: 'Palma',
		provincia: 'Islas Baleares'
	},
	detalles: {
		tamanyo: '102 m²',
		constructora: 'BP Buildings SA',
		anyoConstruccion: 1989,
		colorFachada: 'verde',
		cantidadVentanas: 5,
		cantidadMuebles: 0,
		cantidadBanyo: 2
	},
	precio: {
		valor: 395000,
		monedaValor: 'euros',
		monedaValorSimbolo: '€'
	},
	mostrarResumen: function () { // Método para mostrar un resumen de las propiedades del objeto en consola.
		let resumenDatosVivienda = 	`Vivienda ubicada en ${this.ubicacion.ciudad}, ${this.ubicacion.provincia}.\n`+
									`Construida en ${this.detalles.anyoConstruccion} por constructora ${this.detalles.constructora}.\n`+
									`se compone de ${this.detalles.tamanyo} con:\n`+
									` · ${this.detalles.cantidadVentanas} ventanas\n`+
									` · ${this.detalles.cantidadBanyo} baños\n`+
									` · ${this.detalles.cantidadMuebles} muebles\n`+
									`Precio del inmueble: ${this.precio.valor} ${this.precio.monedaValorSimbolo}`; // Datos a mostrar en consola
		return console.info (resumenDatosVivienda); // Mostramos resumen en consola
	},
	mostrarPropiedadObjeto: function (propiedad) { // Método para iterar sobre los valores de una propiedad especificada del objeto y mostrarlos en consola
		for (const [llave, valor] of Object.entries(this[propiedad])) {
			console.info (`${llave}: ${valor}`); // Muestra en consola cada llave con su valor dentro de la propiedad especificada
		}
	}
};

// Segundo objeto
var ATHM50x = {
	descripcion: 'Auriculares profesionales de monitorización',
	detalles: {
		marca: 'Audio-Technica',
		modelo: 'ATH-M50x',
		tipo: 'Cerrado dinámico',
		color: 'negro '
	},
	especificaciones: {
		tipoIman: 'Neodimio',
		diametroTransductor: 45,
		bobina: 'cable blindado de cobre y aluminio',
		respuestaaFrecuencia: {
			min: 15,
			max: 28000,
		},
		sensibilidad: 99,
		impedancia: 38,
		peso: 285
	},
	stock: {
		tienda: 0,
		almacen: 10
	},
	mostrarResumen: function () {
		let resumenDatosProducto =	`${this.detalles.marca} ${this.detalles.modelo}\n`+
									`${this.descripcion}.\n`+
									'\nEspecificaciones\n-------------------\n'+
									`Tipo: ${this.detalles.tipo}\n`+
									`Diámetro de transductor: ${this.especificaciones.diametroTransductor} mm\n`+
									`Imán: ${this.especificaciones.tipoIman}\n`+
									`Respuesta de frecuencia: ${this.especificaciones.respuestaaFrecuencia.min} - ${this.especificaciones.respuestaaFrecuencia.max} Hz\n`+
									`Sensibilidad: ${this.especificaciones.sensibilidad} dB\n`+
									`Impedancia: ${this.especificaciones.impedancia} ohms\n`+
									`Peso: ${this.especificaciones.peso} g\n`+
									'-------------------'; // Datos a mostrar en consola

		return console.info (resumenDatosProducto);
	},
	comprobarStock: function (lugar) { // Método para comprobar la cantidad de unidades existentes almacenadas en tienda o almacen
		return console.info (`${this.detalles.modelo}:`, this.stock[lugar] > 0 ? `Quedan ${this.stock[lugar]} unidad(es).` : `Sin stock en ${lugar}.`);
	}
};

// Tercer objeto
var impresora3D = {
	marca: 'Anet',
	modelo: 'ET5',
	especificaciones: {
		dimensiones: {
			fisicas: {
				alto: 640,
				ancho: 520,
				profundidad: 540
			},
			impresion: {
				alto: 400,
				ancho: 300,
				profundidad: 300
			}
		},
		diametro: {
			boquilla: 0.4,
			filamento: 1.75
		},
		materialSoportado: ['PLA', 'ABS', 'HIPS'],
		peso: {
			neto: 9.7,
			bruto: 14.2
		},
		pantalla: true
	},
	comprobarSoporteMaterial: function (tipo) { // Método para comprobar si un tipo de material especificado es soportado
		let material = tipo.toUpperCase(); // Forzamos mayúsculas en el nombre del material antes de comparar con elementos de Array

		return console.info (`El material ${material}`, this.especificaciones.materialSoportado.includes(material) ? 'es soportado.' : 'no es soportado.'); // Mostramos en consola si el material es soportado o no
	}
};

// Uso de métodos de los diferentes objetos
miCasa.mostrarResumen (); // Muestra resumen de las propiedades del objeto miCasa
/** miCasa.mostrarPropiedadObjeto ('detalles') */ // Muestra los valores dentro de la propiedad detalles del objeto miCasa

ATHM50x.mostrarResumen (); // Muestra resumen de las propiedad del objeto ATHM50x
/** ATHM50x.comprobarStock('tienda') */ // Muestra información sobre la cantidad del producto disponible en tienda

impresora3D.comprobarSoporteMaterial('pla'); // Muestra si el material especificado es soportado por la impresora
impresora3D.comprobarSoporteMaterial('test');
