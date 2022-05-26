import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() ID: string;

  viewType = '';
  password: string;
  newPassword: string;
  cofirmPassword: string;
  refShow:boolean = true;
  passShow:boolean = true;
  logoutShow:boolean = true;
  profileShow: boolean = true;
  constructor(
    public modalCtrl: ModalController,
  ) { 

  }

  ngOnInit() {
    this.viewType = this.ID;
    if(this.ID == 'refresh'){
      this.refShow = false;
    }else if(this.ID == "password"){
      this.passShow = false;
    } else if(this.ID == 'logout'){
      this.logoutShow = false;
    } else if(this.ID == "profile"){
      this.profileShow = false;
    }
  }
  
  onOK(){
    console.log('OK');
    this.modalCtrl.dismiss(null, 'ok'); 
 
  }
  onSave(){
    console.log('SAVE');
    this.modalCtrl.dismiss(null, 'save'); 
  }
  onCancel(){
    console.log('Cancel');
    this.modalCtrl.dismiss(null, 'cancel'); 
    
  }

}
