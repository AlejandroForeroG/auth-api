import { Router, Response, Request } from "express";
import EspecialidadController from "../controllers/EspecialidadController";
class especialidadRouter {
    /**
     * Router de especialidad se encarga tomando  de asignar
     * el controlador a cada ruta correpsndiente
     * 
     */
  router: Router;
  especialidadController: EspecialidadController;

  constructor() {
    this.router = Router();
    this.especialidadController = new EspecialidadController();
    this.routes();
  }

  private routes(): void {
    this.router.post("/crear_cita", (req: Request, res: Response) => {
      this.especialidadController.crear_especialidad(req, res);
    });
    this.router.get("/citas", (req: Request, res: Response) => {
      this.especialidadController.obtener_especialidad(req, res);
    });
  }
}

const miRouter = new especialidadRouter();
export default miRouter.router;