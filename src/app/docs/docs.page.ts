import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {
  docs: any = [];
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.initializeApp();

  }
  initializeApp(){
    this.docs = [
      {
        date: '18/01/2022',
        title: 'Terms & Conditions',
        documentType: 'Client Complete/signed form',
        type:'Client manual upload',
        share: true
      },
      {
        date: '19/01/2022',
        title: 'Terms & Conditions',
        documentType: 'Client Complete/signed form',
        type:'Client manual upload',
        share: true
      },
      {
        date: '20/01/2022',
        title: 'Terms & Conditions',
        documentType: 'Client Complete/signed form',
        type:'Client manual upload',
        share: true
      },
      {
        date: '21/01/2022',
        title: 'Terms & Conditions',
        documentType: 'Client Complete/signed form',
        type:'Client manual upload',
        share: true
      }
    ]
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
