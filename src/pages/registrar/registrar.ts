import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public LoginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
