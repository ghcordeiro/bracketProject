import { Entity, Column, CreateDateColumn, ManyToOne, OneToOne, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Times } from "./Times";
import { Mapas } from "./Mapas";
import { type } from "os";

@Entity()
export class Partidas {
    @PrimaryGeneratedColumn()
    idPartida: number;

    @CreateDateColumn({type:'date'})
    dataPartida: Date;

    @PrimaryColumn({name: "rodada"})
    rodada: number;

    @PrimaryColumn({name: "idTime1Id"})
    @ManyToOne(type => Times, time1 => time1.id)
    idTime1: Times;

    @PrimaryColumn({name: "idTime2Id"})
    @ManyToOne(type => Times, time2 => time2.id)
    idTime2: Times;
    
    @Column()
    roundstime1: number;

    @Column()
    roundstime2: number; 

    @OneToMany(type => Mapas, mapas => mapas.id)
    idMapa: Mapas;
}
