import e from "express";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn,Column ,UpdateDateColumn  } from "typeorm";
@Entity ({name: "tb_postagem"})
  export class Postagem{
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(50)
@Column({length: 1000, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date
  }

function IsNotempty() {
    throw new Error("Function not implemented.");
}
