import { Collection } from './Collection';
import { IGroup } from './interfaces/IGroup';

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

    constructor(group: IGroup) {
        this.name = group.name;
        this.description = group.description;
        this.owner = group.owner;
        this.collections = this.collections;
    }
}