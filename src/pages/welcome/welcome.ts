import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Profile } from "../profile/profile";
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  public user:any="X";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    storage.ready().then(() => {
       storage.get('user').then((val) => {
         this.user=val;
         console.log("Hi "+this.user);
       })
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  goToProfile(){
    this.navCtrl.push(Profile);
  }

}
