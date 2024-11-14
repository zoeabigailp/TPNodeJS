import { Module } from '@nestjs/common';
import { RequestsModule } from './requests/requests.module';


@Module({
  imports: [RequestsModule], //si quiero conectar una base de datos
  controllers: [], //rutas get, post, etc
  providers: [], //funciones que se encargan de la base de datos
})
export class AppModule {}
