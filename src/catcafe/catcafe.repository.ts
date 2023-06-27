import { readFile, writeFile } from "fs/promises";
import { CreateCatCafeDto } from "./dtos/catcafe.dto";

export class CatCafeRepository{
    async getOne(id:string){
        const contents=await readFile('catcafe.json','utf8');
        const catcafe=JSON.parse(contents);
        return catcafe[id];
    }

    async getAll(){
        const contents=await readFile('catcafe.json','utf8');
        const catcafe=JSON.parse(contents);
        return catcafe;
    }

    async create(catcafe:CreateCatCafeDto){
        const readfile=await readFile('catcafe.json','utf8');
        const catCafe=JSON.parse(readfile);
        catCafe[catcafe.id]={
            id:catcafe.id,
            foodname:catcafe.foodname,
            toppings:catcafe.toppings,
            quantity:catcafe.quantity};
        await writeFile('catcafe.json',JSON.stringify(catCafe));
    }
}