import { Tier } from './Tier';

export class Collection {

    name: String;
    description: String;
    validTo: Date;
    goal: Number;
    allowCustomPrice: Boolean;
    tiers: Tier[];

    constructor(newName: String, newDescriptiom: String, newValid: Date, newGoal: Number, allowCustom: Boolean) {
        this.name = newName;
        this.description = newDescriptiom;
        this.validTo = newValid;
        this.goal = newGoal;
        this.allowCustomPrice = allowCustom;
        this.tiers = [];
    }
}