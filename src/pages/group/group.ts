import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GroupService } from "../../providers/group-service";

/*
  Generated class for the Group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public groupService: GroupService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

}
