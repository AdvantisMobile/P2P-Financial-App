import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) { 
    const user = localStorage.getItem('user');
    console.log('USER===> PROFILE>TS', JSON.parse(user));
  }

  ngOnInit() {
    this.onRefresh();
  }
  onBack(){
    this.router.navigateByUrl('tabs/home');
  }
  async onRefresh(){
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
      console.log('CONFIRE MODAL RETURN DATA----> TOTAL-ACCOUNT.TS',data)
    });
    await modal.present();
  }

}
