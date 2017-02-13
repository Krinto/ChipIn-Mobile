import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import md5 from 'crypto-md5';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  loading: any;
  profilePicture: any = "https://www.gravatar.com/avatar/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    
  }

  register() {
    if(this.password != this.passwordConfirm){
      console.log("passwords don't match");
      return;
    }
    this.loading = this.loadingCtrl.create({
      content: 'Registering...'
    });
 
    this.loading.present();

    let details = {
      email: this.email,
      name: this.name,
      password: this.password
    };

    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, (err) =>{
      this.loading.dismiss();
    });
  }

  emailChanged(){
    this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
  }
}
