import { Collection } from './Collection';

export class Group {

    name: String;
    description: String;
    owner: any;
    collections: Collection[];

    constructor(newName: String, newDescription: String, newOwner: any) {
        this.name = newName;
        this.description = newDescription;
        this.owner = newOwner;
        this.collections = [];
    }
}