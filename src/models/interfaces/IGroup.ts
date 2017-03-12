import { ICollection } from './ICollection';

export interface IGroup {
    name: String;
    description: String;
    owner: any;
    collections: ICollection[];
}