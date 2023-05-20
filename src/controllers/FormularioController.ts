import { Request, Response } from "express";
import * as jsonSchema from '../json-schema.json';

type jsonSchema = Record<string, any>; //record en ts el primero son las llaves y el segundo es el tipo
class FormularioController {
  /**
   * Controller de formulario se encarga de dar la logica del negocio a las rutas
   * 
   */
  obtenerDefinicion(req: Request, res: Response) {
    try{
        const { formulario } = req.params;
        const miEsquema: jsonSchema = jsonSchema;
    
        if (miEsquema.definitions[formulario]) {
          res.json(miEsquema.definitions[formulario]);
        } else {
          res.status(404).json("error no encontrado");
        }

    }catch(e){
        console.log(e)
        res.status(400)
        res.send("a ocurrido un error")
    }
  }
}
export default FormularioController;
