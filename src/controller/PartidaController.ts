import { Header, JsonController, Post, Get, Body } from "routing-controllers";
import { getRepository } from "typeorm";
import { Partidas } from "../entity/Partidas";

@JsonController()
export class PartidaController {

    partidasRepository = getRepository(Partidas);

    @Header("Access-Control-Allow-Origin", "*")
    @Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    @Post("/partidas")
    async PostPatidas(@Body() partida: Partidas) {

        try {
            //Save on database
            await this.partidasRepository.save(partida);
            

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