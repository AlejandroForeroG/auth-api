import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import swaggerUI from "swagger-ui-express";
import { swaggerSpecs } from "./swagger.conf";
import PacienteRouter from "./routes/PacienteRouter";
import MedicoRouter from "./routes/MedicoRouter";
import FormularioRouter from "./routes/FormularioRouter";
import CitaRouter from "./routes/CitaRouter";
import EspecialidadRouter from "./routes/EspecialidadRouter";
import routerAuth from "./routes/authroutes";
import passport from "passport";
import myStrategy from "./config/passport";
import cors from "cors";

class App {
  /**
   * Clase principal del aplicativo define las rutas de la api
   *
   * @author: Alejandro Forero
   * @version: 0.0.1
   * @description: Clase principal del aplicativo define las rutas de la api
   *
   */
  //atrributos
  public app: Application;
  private server: any;
 

  constructor() {
    /**
     * Express es la bublioteca que nos permite crear el servidor y
     * 
     */
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
    this.app.use(cors())
    this.app.use("/auth", routerAuth);
    passport.use(myStrategy);
    this.app.use(passport.initialize());
    this.routes();
  }
  /**
   * Aqui se definen las rutas de la api
   */
  private routes(): void {
  
    this.app.use("/",passport.authenticate('jwt',{session:false}) , PacienteRouter);
    this.app.use("/",passport.authenticate('jwt',{session:false}) ,MedicoRouter)
    this.app.use("/",passport.authenticate('jwt',{session:false}) ,FormularioRouter)
    this.app.use("/",passport.authenticate('jwt',{session:false}) ,CitaRouter)
    this.app.use("/",passport.authenticate('jwt',{session:false}) ,EspecialidadRouter)
    
  }
/**
 * metodos para iniciar y parar el servidor 
 */
  public start(): void {
    this.server = this.app.listen(3000, () => {
      console.log("Server on port 3000");
    });
  }
  public close(): void {
    this.server.close();
  }
}
export default App;
