import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  public user:any="";

  public nombre:any="";
  public ap_materno:any="";
  public ap_paterno:any="";
  public fecha:any="";
  public rfc:any="";

  public isSent:boolean=false;
  public form:FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public formBuilder:FormBuilder) {
    storage.ready().then(() => {
       storage.get('user').then((val) => {
         this.user=val;
         console.log("Hi "+this.user);
       })
     });

     this.form=this.formBuilder.group({
      nombre:["David Giovanny",Validators.required],
      ap_materno:["Ibarra",Validators.required],
      ap_paterno:["Gil",Validators.required],
      fecha:["",Validators.required],
    });

    this.nombre=this.form.controls["nombre"];
    this.ap_materno=this.form.controls["ap_materno"];
    this.ap_paterno=this.form.controls["ap_paterno"];
    this.fecha=this.form.controls["fecha"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  send(){
    if(!this.form.valid){
      this.isSent=true;
      return;
    }
        
    this.rfc=(this.ap_paterno.value.charAt(0)+""+this.ap_paterno.value.charAt(1)+this.nombre.value.charAt(1)+this.fecha.value.year.toString().substring(2,4)+this.fecha.value.month+this.fecha.value.day).toUpperCase( );
  }

}
