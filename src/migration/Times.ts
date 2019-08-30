/*import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Times } from "../entity/Times";

export class TimesRefactoring implements MigrationInterface {
    
    async up(queryRunner: QueryRunner): Promise<any> {

    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Times)
        .values([
            { nomeTime: "AVANGAR"},
            { nomeTime: "compLexity"},
            { nomeTime: "Cr4zy"},
            { nomeTime: "DreamEaters"},
            { nomeTime: "forZe"},
            { nomeTime: "FURIA"},
            { nomeTime: "G2 Esports"},
            { nomeTime: "Grayhound"},
            { nomeTime: "HellRaisers"},
            { nomeTime: "INTZ"},
            { nomeTime: "Mousesports"},
            { nomeTime: "North"},
            { nomeTime: "NRG Gaming"},
            { nomeTime: "Syman Gaming"},
            { nomeTime: "TyLoo"},
            { nomeTime: "Vitality"}
        ])
        .execute();
    }

    async down(queryRunner: QueryRunner): Promise<any> { 
        
    }

    
}*/