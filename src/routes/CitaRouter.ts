import {Router,Response,Request} from 'express';
import CitaController from '../controllers/CitaController';
class CitaRouter{
    /**
     * Router de cita se encarga tomando  de asignar
     * el controlador a cada ruta correpsndiente
     * 
     */
    router:Router
    citaController:CitaController

    constructor(){
        this.router = Router();
        this.citaController = new CitaController();
        this.routes();
    }

    private routes():void{
        this.router.post("/crear_cita",(req:Request,res:Response)=>{
            this.citaController.crear_cita(req,res);
        });
        this.router.get("/citas",(req:Request,res:Response)=>{
            this.citaController.obtener_citas(req,res);
        });
    }
    
}
const miRouter = new CitaRouter();
export default miRouter.router;