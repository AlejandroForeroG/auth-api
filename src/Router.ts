import express,{Application,Request,Response} from 'express';
class App{
    //atrributos
    public app: Application;
    private server: any;

    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.routes();
    }
    private routes():void{
        this.app.get('/',(req:Request,res:Response)=>{
            res.send('Hello World');
        });
    }
    public listen():void{
        this.server = this.app.listen(3000,()=>{
            console.log('Server on port 3000');
        });
    }
    public close():void{
        this.server.close();
    }
}
export default App;