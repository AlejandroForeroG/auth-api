import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
class PacienteController {
  /**
   * Controller de Paciente se encarga de dar la logica del negocio a las rutas
   * 
   */
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async crearPaciente(req: Request, res: Response) {
    try {
      const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body;
      const paciente = await this.prismaClient.paciente.create({
        data: {
          cedula,
          nombre,
          apellido,
          fechaNacimiento,
          telefono,
        },
      });
      res.json(paciente);
    } catch (e) {
      res.status(400);
      res.json("hubo un error al crear el paciente");
    }
  }

  async obtenerPacientes(req: Request, res: Response) {
    const pacientes = await this.prismaClient.paciente.findMany();
    res.json(pacientes);
  }
}
export default PacienteController;
