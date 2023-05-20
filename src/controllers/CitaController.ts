import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
class CitaController {
  /**
   * Controller de cita se encarga de dar la logica del negocio a las rutas
   * 
   */
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async crear_cita(req: Request, res: Response) {
    const {
      idCita,
      fecha,
      Paciente,
      pacienteCedula,
      Medico,
      medicoTarjetaProfesional,
    } = req.body;

    try {
      const Cita = await this.prismaClient.cita.create({
        data: {
          idCita,
          fecha,
          Paciente,
          pacienteCedula,
          Medico,
          medicoTarjetaProfesional,
        },
      });
      res.status(201).json(Cita);
    } catch (e) {
      console.log(e);
      res.status(505).send("Error en la aplicacion");
    }
  }

  async obtener_citas(req: Request, res: Response) {
    try {
      const citas = await this.prismaClient.cita.findMany();
      res.status(200).json(citas);
    } catch (e) { 
      console.log(e)
    }
  }
}

export default CitaController;
