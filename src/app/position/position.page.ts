import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-position',
  templateUrl: './position.page.html',
  styleUrls: ['./position.page.scss'],
})
export class PositionPage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { 

  }

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
  addAccount(){
    this.navCtrl.navigateForward('tabs/add-account');
  }
  addAList(){
    this.navCtrl.navigateForward('tabs/account-list');
  }
  onMapping(){
    this.navCtrl.navigateForward('tabs/mapping-account');
  }
  onTotal(){
    this.navCtrl.navigateForward('tabs/total');
  }
}
