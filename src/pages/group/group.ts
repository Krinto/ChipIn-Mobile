import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyGroupsPage } from '../my-groups/my-groups'
import { SearchGroupsPage } from '../search-groups/search-groups'

/*
  Generated class for the Group tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  tab1Root: any = MyGroupsPage;
  tab2Root: any = SearchGroupsPage;

  constructor(public navCtrl: NavController) {

  }

}