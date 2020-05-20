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
									` · ${this.detalles.cantidadVentanas} ventanas\n · ${this.detalles.cantidadBanyo} baños\n · ${this.detalles.cantidadMuebles} muebles\n`+
									`Precio del inmueble: ${this.precio.valor} ${this.precio.monedaValorSimbolo}` // Datos a mostrar en consola
		console.info (resumenDatosVivienda); // Mostramos resumen en consola
	},
	mostrarPropiedadObjeto: function (propiedad) { // Método para iterar sobre los valores de una propiedad especificada del objeto y mostrarlos en consola
		for (const [llave, valor] of Object.entries(this[propiedad])) {
			console.info (`${llave}: ${valor}`); // Muestra en consola cada llave con su valor dentro de la propiedad especificada
		}
	}
}

miCasa.mostrarResumen (); // Muestra resumen de las propiedades del objeto miCasa
