import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { Postagem } from "../entities/entities.module";
import {DeleteResult, ILike, Repository} from "typeorm";
@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private PostagemRepository: Repository<Postagem>
    ){}
    async findAll(): Promise<Postagem[]>{
        return await this.PostagemRepository.find()
    }
    async findById(id:number): Promise<Postagem>{
    let postagem= await this.PostagemRepository.findOne({
    where:{
        id
    }
    })
    
    if(!postagem)
    throw new HttpException('Postagem nao existe ',HttpStatus.NOT_FOUND)
    return postagem
    
}
async findByTitulo(titulo: string): Promise<Postagem[]>{
    return await this.PostagemRepository.find({
        where: {
            titulo: ILike(`% ${titulo} %`)
        }
    })
}
 async create(postagem: Postagem): Promise<Postagem>{
    return await this.PostagemRepository.save(postagem)
 }
 async update(postagem: Postagem): Promise<Postagem>{
    let buscarpostagem = await this.findById(postagem.id)

    if(!buscarpostagem || !postagem.id)
       throw new HttpException(`Postagem nao existe `,HttpStatus.NOT_FOUND)
       return await this.PostagemRepository.save(postagem)
 }
 async delete(id: number):Promise<DeleteResult>{
    let buscarpostagem = await this.findById(id)
    if(!buscarpostagem)
    throw new HttpException(`Postagem nao encomtrada`,HttpStatus.NOT_FOUND)

    return await this.PostagemRepository.delete(id)
 }

}