import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-fact',
  templateUrl: './fact.page.html',
  styleUrls: ['./fact.page.scss'],
})
export class FactPage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  async profile(){
    const modalOpt = {
      component: ModalComponent,
      cssClass:'confirm-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        ID: 'password'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('CONFIRE MODAL RETURN DATA----> TOTAL-ACCOUNT.TS',data);
      if(data.role == 'ok'){
        this.updateProfile();
      }
    });
    await modal.present();
  }
  async updateProfile(){
    const modalOpt = {
      component: ModalComponent,
      cssClass:'confirm-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        ID: 'profile'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('CONFIRE MODAL RETURN DATA----> HOME.TS',data);
      if(data.role == 'ok'){
        this.router.navigateByUrl('start');
      }
    });
    await modal.present();
  }
  async logout(){
    const modalOpt = {
      component: ModalComponent,
      cssClass:'confirm-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        ID: 'logout'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('CONFIRE MODAL RETURN DATA----> HOME.TS',data);
      if(data.role == 'ok'){
        this.router.navigateByUrl('start');
      }
    });
    await modal.present();
    
  }

}
