import { Header, JsonController, Post, Get, Body } from "routing-controllers";
import { getRepository } from "typeorm";
import { Times } from "../entity/Times";

@JsonController()
export class TimesController {

    timesRepository = getRepository(Times);

    @Header("Access-Control-Allow-Origin", "*")
    @Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    @Post("/times")
    async PostPatidas(@Body() time: Times) {

        try {
            //Save on database
            await this.timesRepository.save(time);
            

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