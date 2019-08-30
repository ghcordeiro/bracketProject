import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Partidas } from "./Partidas";


@Entity()
export class Times {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTime: string;

    @OneToMany(type => Partidas, partidas => partidas.idPartida)
    partidas: Partidas[];
}