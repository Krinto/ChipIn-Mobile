import { ITier } from './ITier';

export interface ICollection {
    name: String;
    description: String;
    validTo: Date;
    goal: Number;
    allowCustomPrice: Boolean;
    tiers: ITier[];
}