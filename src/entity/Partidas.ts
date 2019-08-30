import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Times } from "./Times";
import { Mapas } from "./Mapas";

@Entity()
export class Partidas {
    @PrimaryGeneratedColumn()
    idPartida: number;

    @CreateDateColumn({type:'date'})
    dataPartida: Date;

    @PrimaryColumn()
    rodada: number;

    @ManyToOne(type => Times, times=> times.id)
    idTime1: Times[];

    @ManyToOne(type => Times, times => times.id)
    idTime2: Times[];

    @Column()
    roundstime1: number;

    @Column()
    roundstime2: number;

    @OneToOne(type => Mapas, mapas => mapas.idMapa)
    idMapa: Mapas[];
}
