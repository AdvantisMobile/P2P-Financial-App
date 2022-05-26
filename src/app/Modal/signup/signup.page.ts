import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  categoris: any = [];
  subCategoris:any = [];
  category:any;
  subCategory:any;
  catInfo: any;
  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    let cat:any = [];
    let sub:any = [];
     
    fetch('./assets/js/categories.json').then(res => res.json())
      .then(json => {
        console.log('Category JSON', json);
        this.catInfo = json;
        for (const [key, value] of Object.entries(json)){
          cat.push(key);
          sub.push(value);
        }
        for(let i = 0; i <= cat.length;i++){
          let item = {
            id: i,
            name: cat[i]
          };
          this.categoris.push(item);
        }
        console.log('this.cat', this.categoris);  
    });
  }
  onSave(){
    this.closeModal();
  }
  onCancel(){
    this.closeModal();
  }
  closeModal() { 
    // data null and role cancel
     this.modalCtrl.dismiss(null, 'cancel'); 
   }
}
