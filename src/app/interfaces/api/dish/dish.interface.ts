import { TypeState } from 'src/app/enums';

export interface IDishQueryDto {
    description: string;
    id: number;
    name: string;
    price: number;
    state: TypeState;
}

export interface IDishAddDto {
    description: string;
    name: string;
    price: number;
}
export interface IDishUpdateDto {
    description: string;
    name: string;
    price: number;
}
