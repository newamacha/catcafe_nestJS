import { CatCafeRepository } from "./catcafe.repository";
import { CreateCatCafeDto } from "./dtos/catcafe.dto";

export class CatCafeService{
    catcafeRepo: CatCafeRepository;

    constructor(){
        this.catcafeRepo=new CatCafeRepository();
    }

    getOne(id:string){
        return this.catcafeRepo.getOne(id);
    }

    getAll(){
        return this.catcafeRepo.getAll();
    }

    create(catcafe:CreateCatCafeDto){
        return this.catcafeRepo.create(catcafe);
    }
}