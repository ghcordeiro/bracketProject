import { Header, JsonController, Post, Get, Body } from "routing-controllers";
import { getRepository } from "typeorm";
import { Mapas } from "../entity/Mapas";

@JsonController()
export class TimesController {

    mapasRepository = getRepository(Mapas);

    @Header("Access-Control-Allow-Origin", "*")
    @Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    @Post("/mapas")
    async PostPatidas(@Body() mapa: Mapas) {

        try {
            //Save on database
            await this.mapasRepository.save(mapa);
            

        } catch (ex) {

            //To working
            return "Houve um erro ao processar o JSON de entrada: " + ex
        }
    }
/*
    @Get('/partidas')
    async GetPartidas(){
        try {
            let retorno = await this.partidasRepository.createQueryBuilder().select()
            return retorno
        } catch (ex) {
            //To working
            console.log(ex);
            return "Houve um erro ao processar o JSON de saída: " + ex
        }
    }*/
}