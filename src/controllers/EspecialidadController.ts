import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
class EspecialidadController {
    /**
     * Controller de Especialidad se encarga de dar la logica del negocio a las rutas
     * 
     */
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async crear_especialidad(req: Request, res: Response) {
    const {
      idEspecialidad,
      nombre,
      descripcion,
      Medico,
    } = req.body;

    try {
      const Especialidad = await this.prismaClient.especialidad.create({
        data: {
          idEspecialidad,
          nombre,
          descripcion,
          Medico
        },
      });
      res.status(201).json(Especialidad);
    } catch (e) {
      console.log(e);
      res.status(505).send("Error en la aplicacion");
    }
  }

  async obtener_especialidad(req: Request, res: Response) {
    try {
      const citas = await this.prismaClient.especialidad.findMany();
      res.status(200).json(citas);
    } catch (e) {
      console.log(e);
    }
  }
}

export default EspecialidadController;
