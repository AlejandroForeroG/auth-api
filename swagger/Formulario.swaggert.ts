export default {
  /**
     * 
     * @swagger
     * 
     * 
     * 
    *   /formulario/:formulario:
        get:
            summary: obtener el formulario especifico para genera un motor de formularios 
            responses:
               200:
                    description: se a obtenido el formulario especifico para genera un motor de formularios
                    type: string
                    content:
                    aplicattion/json:
                    example:
               404:
                    description: Error en la obtencion de  formularios
                    content:
                    schema:
                         type: array
                    example: "Se produjo un error"
     *

     */
};
