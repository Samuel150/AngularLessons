import { TypeState } from 'src/app/enums';

export interface ICategoryQueryDto{
    description: string;
    id: number;
    name: string;
    state: TypeState;
}