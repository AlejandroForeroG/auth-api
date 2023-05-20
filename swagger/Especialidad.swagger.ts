export default {
  /**
     * 
     * @swagger
     * 
     * paths:
          * /crear_especialidad:
          *    post:
                    summary: Registrar una especialidad o en la base de datos
                    description: Se ha registrado exitosamente una especialidad en la base de datos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos de la especialidad
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          * 
          * /especialidad:
          *    get:
                    summary: obtener las especialidades  de la base de datos
                    description: se obtuvieron los medicos de la base de daoos
                    responses:
                    '200':
                         description: Un arreglo JSON con los datos de las especialidades
                         content:
                              application/json:
                                   schema:
                                        type: array
                                        items:
                                             type: array
          */
};
