export default {
  /**
     * 
     * @swagger
     * 
     * paths:
          * /crear_medico:
          *    post:
                    summary: Registrar un medico en la base de datos
                    description: Se ha registrado exitosamente un medico en la base de datos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos del medico
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          * 
          * /medico:
          *    get:
                    summary: obtener los medicos de la base de datos
                    description: se obtuvieron los medicos de la base de daoos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos de los medicos
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          */
};
