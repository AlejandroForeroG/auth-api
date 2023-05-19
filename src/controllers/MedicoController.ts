import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

class MedicoController {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async crearMedico(req: Request, res: Response) {
    const {
      tarjetaProfesional,
      nombre,
      apellido,
      consultorio,
      correo,
      Cita,
      Especialidad,
      IdEspecialidad,
    } = req.body;

    try {
        const medico = await this.prismaClient.medico.create({
            data: {
            tarjetaProfesional,
            nombre,
            apellido,
            consultorio,
            correo,
            Cita,
            Especialidad,
            IdEspecialidad,
            },
        });
        res.status(201).json(medico);
    }catch(e){
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async obtenerMedicos(req: Request, res: Response) {
    try{
        const medicos = await this.prismaClient.medico.findMany();
        res.status(200).json(medicos);
    }catch(e){

    }
  }
}
export default MedicoController;
