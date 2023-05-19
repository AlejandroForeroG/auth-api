//importar la bibliotca de trbahao 

import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerOptions = {

	definition: {
		openapi: '3.0.0',
		info:{
			title:'API de la ips atenea',
			version:'1.0.0',
			description:'Esta api tiene la funcionalidad que soporta la operacion de la API de la ips atenea',

		},
		//donde se guarda la api
		servers:[
			{
				url:'http://localhost:3000',
				description:'Servidor local'

			}
		]
	},
	apis: ['src/index.ts','./swagger/*.swagger.ts']
	//que busque en la carpeta src el index, y en la carpeta swagger todos los archivos swagger          
}
//de aqui en adelante se usan estas opciones para el proyecto
export const swaggerSpecs = swaggerJSDoc(swaggerOptions)