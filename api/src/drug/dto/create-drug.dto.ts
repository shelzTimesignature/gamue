import {IsNotEmpty} from "class-validator";

export class CreateDrugDto {
    @IsNotEmpty()
    public name: string
}
