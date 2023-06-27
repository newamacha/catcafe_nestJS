import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CatCafeService } from "./catcafe.service";
import { CreateCatCafeDto } from "./dtos/catcafe.dto";

@Controller('catcafe')
export class CatCafeController{
    catcafeService:CatCafeService;

    constructor(){
        this.catcafeService=new CatCafeService();
    }

    @Get()
    listCatCafe(){
        return this.catcafeService.getAll();
    }

    @Post()
    createCatCafe(@Body() body:CreateCatCafeDto){
        return this.catcafeService.create(body);
    }

    @Get("/:id")
    getCatCafe(@Param('id') id:string){
        return this.catcafeService.getOne(id);
    }
}