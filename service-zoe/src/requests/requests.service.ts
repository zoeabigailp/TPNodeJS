import { Injectable } from '@nestjs/common';
import { Requests } from './requests.entity';
import axios from 'axios';
import { response } from 'express';

@Injectable() //Etiqueta que me ermite inyectarla en otro lado.
export class RequestsService {
  
    //
    async createRequests(requests: Requests){
        console.log("Cuerpo:", requests);

        const url = "https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json";
        try{
            const response = await axios.post(url, requests).then(response => {
                return response;
            })

        }catch(error){
            throw new Error("Error al conectar con el servidor");
        }
    }
}
