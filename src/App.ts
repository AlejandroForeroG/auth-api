import express, { Application, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import { swaggerSpecs } from "./swagger.conf";
import PacienteRouter from "./routes/PacienteRouter";
import MedicoRouter from "./routes/MedicoRouter";
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
     * definir las rutas de la api
     */
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
    
    this.routes();
  }
  private routes(): void {
  
    this.app.use("/api/paciente", new PacienteRouter().router);
    this.app.use("/api/medicos",new MedicoRouter().router)
    
  }

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
