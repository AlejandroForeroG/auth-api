export default {
  /**
     * 
     * @swagger
     * 
     * paths:
          * /crear_cita:
          *    post:
                    summary: Registrar una cita en la base de datos
                    description: Se ha registrado exitosamente una cita  en la base de datos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos de la cita 
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          * 
          * /cita:
          *    get:
                    summary: obtener las citas  de la base de datos
                    description: se obtuvieron los medicos de la base de daoos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos de las citas
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          */
};
