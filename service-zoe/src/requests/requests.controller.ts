import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Requests } from './requests.entity';

@Controller('requests')
export class RequestsController {

    constructor(private requestsService: RequestsService){} //inyecto dependencia

    @Post()
    @UsePipes(new ValidationPipe({transform:true, whitelist:true})) //Uso las validaciones
    async crearReclutamiento( @Body() requests: Requests){
        try{
            //llamo al servicio
            const reclu = await this.requestsService.createRequests(requests);

            //retorno
            return reclu;
        }catch(error){
            throw new Error("Error en la peticion!");
        }
       
    }
}
