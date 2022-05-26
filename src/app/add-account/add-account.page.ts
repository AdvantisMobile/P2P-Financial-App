import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SignupPage } from '../Modal/signup/signup.page';
import { LiveComponent } from '../Modal/live/live.component';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  showLiveWarning: boolean;
  showManualWarning: boolean;
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.showLiveWarning = false;
    this.showManualWarning  = false;
  }
  back(){ 
    console.log('BACK==> ADD AC.TS');
    this.navCtrl.back();
  }
  async onLive(){
    const modalOpt = {
      component: LiveComponent,
      cssClass:'signup-modal',
      backdropDismiss: true,
      swipeToClose: true,
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
  }
  async onManual(){
    const modalOpt = {
      component: SignupPage,
      cssClass:'signup-modal',
      backdropDismiss: true,
      swipeToClose: true,
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
  }
  closeLW(){
    this.showLiveWarning = true;
  }
  closeMW(){
    this.showManualWarning = true;
  }

}
