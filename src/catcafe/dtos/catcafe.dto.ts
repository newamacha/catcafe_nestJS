import { IsString } from "class-validator";

export class CreateCatCafeDto{
    @IsString()
    id:string;

    @IsString()
    foodname:string;

    @IsString()
    toppings:string;

    @IsString()
    quantity:string;
}