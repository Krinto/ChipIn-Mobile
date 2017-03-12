import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Group } from '../models/group';

/*
  Generated class for the GroupService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupService {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello GroupService Provider');
  }
  
  getById(id) {
    return new Promise((resolve, reject) => {
			this.storage.get('token').then((value) => {

				let headers = new Headers();
        headers.append('Authorization', value);
				
				//TODO replace with base uri
				this.http.get('https://safe-caverns-91945.herokuapp.com/api/group/' + id, {headers: headers})
					.subscribe(res => {
						resolve(res);
					}, (err) => {
						reject(err);
				}); 
			});
		});
  }
}
