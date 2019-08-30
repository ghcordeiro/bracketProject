import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Times } from "./Times";

@Entity()
export class Classificacao {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Times, times => times.id)
    idTime: Times[];

    @Column()
    quantidadePartidas: number;

    @Column()
    roundsGanhos: number;
    
    @Column()
    roundsPerdidos: number;
        
    @Column()
    saldoRounds: number;
        
    @Column()
    partidasGanhas: number;
        
    @Column()
    partidasPerdidas: number;



}
