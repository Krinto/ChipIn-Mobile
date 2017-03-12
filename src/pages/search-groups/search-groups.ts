import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GroupService } from '../../providers/group-service';

/*
  Generated class for the SearchGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-groups',
  templateUrl: 'search-groups.html'
})
export class SearchGroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public groupService: GroupService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchGroupsPage');
  }

}
