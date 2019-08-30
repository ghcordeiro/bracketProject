import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne } from "typeorm";
import { Times } from "./Times";
import { Mapas } from "./Mapas";

@Entity()
export class Partidas {
    @PrimaryGeneratedColumn()
    idPartida: number;

    @CreateDateColumn({type:'date'})
    dataPartida: Date;

    @Column()
    rodada: number;

    @ManyToOne(type => Times, times => times.id)
    idTime1: Times[];
    idTime2: Times[];

    @Column()
    roundstime1: number;

    @Column()
    roundstime2: number;

    @OneToOne(type => Mapas, mapas => mapas.idMapa)
    idMapa: Mapas[];
}
