import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  goals: any = [];
  showGoa: boolean = true;
  
  eudcactions: any = [];
  showEdu: boolean = true;
  
  models: any = [];
  showModel:boolean = true;

  advice: any = [];
  showAdv: boolean = true;
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.initializeApp();
  }
  initializeApp(){
    this.goals = [];
    this.eudcactions = [
      {
        name: 'PRODUCT DISCLOSURE STATEMENT',
        products:[]
      },
      {
        name: 'PRODUCT TARGET MARKET DETERMINATION',
        products:[]
      },
      {
        name: 'EDUCATION VIDEOS',
        products:[]
      }
    ];
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
  showGoal(){
    this.showGoa = !this.showGoa;
  }
  showEducation(){
    this.showEdu = !this.showEdu;
  }
  showModels(){
    this.showModel = !this.showModel;
  }
  showAdvice(){
    this.showAdv = !this.showAdv;
  }

}
