import {Router,Response,Request} from 'express'
import FormularioController from '../controllers/FormularioController'
class FormularioRouter{
    /**
     * Router de formulario se encarga tomando  de asignar
     * el controlador a cada ruta correpsndiente
     * 
     */
    router:Router
    miFormularioController: FormularioController
    constructor(){
        this.router = Router()
        this.miFormularioController =new  FormularioController();
        this.routes()
    }
    
    private routes():void{
        this.router.get('/formulario/:formulario',(req:Request,res:Response)=>{
            this.miFormularioController.obtenerDefinicion(req,res)
        })
    }
}

const miRouter = new FormularioRouter
export default miRouter.router 