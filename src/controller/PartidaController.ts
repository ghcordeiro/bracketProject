import { Header, JsonController, Post, Get, Body, Param } from "routing-controllers";
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

            let partidas = new Partidas();

            let existsPartida = await this.partidasRepository
            .createQueryBuilder("partidas")
            .where("partidas.rodada = :rodada")
            .andWhere("partidas.idTime1 = :id1")
            .andWhere("partidas.idTime2 = :id2")
            .setParameters({rodada: partida.rodada, 
                            id1: partida.idTime1,
                            id2: partida.idTime2})
            .getMany();
            
            partidas = existsPartida.find(x => x.idPartida > 0)
            if(typeof(partidas) !== "undefined"){
                return `Partida já cadastrada. ID: ${partidas.idPartida}`
            }
            
            //Save on database
            await this.partidasRepository.save(partida);
        } catch (ex) {

            //To working
            return "Houve um erro ao processar o JSON de entrada: " + ex
        }
    }

    @Header("Access-Control-Allow-Origin", "*")
    @Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    @Get('/partidas/:id')
    async GetPartidas(@Param("id") idPartida: any){
        try {
            let partidas = new Partidas();

            let existsPartida = await this.partidasRepository
            .createQueryBuilder("partidas")
            .where("partidas.idPartida = :partida")
            .setParameters({partida: idPartida})
            .getMany();
            
            partidas = existsPartida.find(x => x.idPartida === idPartida)
            if(typeof(partidas) !== "undefined"){
                return partidas
            }

            return "Partida não encontrada para o ID " + idPartida
        } catch (ex) {
            //To working
            console.log(ex);
            return "Houve um erro ao processar o JSON de saída: " + ex
        }
    }
}