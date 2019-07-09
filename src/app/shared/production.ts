import { Item } from './item';


export interface Production {
    id: number;
    item: Item;
    amount: number;
    startDate: Date;
    endDate: Date;
}