import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Partidas } from "./Partidas";

@Entity()
export class Mapas {

    @PrimaryGeneratedColumn()
    idMapa: number;

    @Column()
    nomeMapa: String;
    
    @OneToOne(type => Partidas, partidas => partidas.idPartida)
    partidas: Partidas[];

}
