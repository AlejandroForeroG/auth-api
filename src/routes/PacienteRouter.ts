import { Router, Response, Request } from "express";
import PacienteController from "../controllers/PacienteController";
class PacienteRouter {
  /**
   * Router de paciente se encarga tomando  de asignar
   * el controlador a cada ruta correpsndiente
   * 
   */
  router: Router;
  pacienteController: PacienteController;
  constructor() {
    this.router = Router();
    this.pacienteController = new PacienteController();
    this.routes();
  }

 private routes():void{
    this.router.post("/crear_paciente", (req: Request, res: Response) => {
      this.pacienteController.crearPaciente(req,res);
    });
    this.router.get("/pacientes",(req: Request, res: Response) => {
        this.pacienteController.obtenerPacientes(req,res);
    });
  }
}
const miRouter = new PacienteRouter();
export default  miRouter.router
