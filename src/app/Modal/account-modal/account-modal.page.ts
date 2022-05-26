import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ModalController, LoadingController } from '@ionic/angular';
import { YodleePresenter } from '../../services/presenter/YodleePresenter';
import { ProviderPresenter } from '../../services/presenter/ProviderPresenter';
import { DataService } from '../../services/API/DataService';
@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.page.html',
  styleUrls: ['./account-modal.page.scss'],
})
export class AccountModalPage implements OnInit {
  @Input() model: any;
  @Input() type: string;

  loading: any;
  showLoading:any;
  fastUrl: any;
  didInit: boolean = false;
  userId: string;
  hasInfo: boolean = false;

  accountName: string;
  accountBalance:string;
  categoris: any = [];
  subCategoris:any = [];
  category:any;
  subCategory:any;

  catInfo: any;

  fromDate:any;
  toDate:any;
  constructor(
    public domSanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public _yodleePresent: YodleePresenter,
    public _providerPresent: ProviderPresenter,
    public _dataService: DataService
  ) { 
    this.fastUrl = '';
    let user = localStorage.getItem('user');
    let userData = JSON.parse(user);
    this.userId = userData.user.id;
    this.fromDate = "2022-01-01";
    this.toDate = "2022-01-15";
  }

  ngOnInit() {
    console.log('Item Data', this.model);
    if(this.model.isAsset){
      this.category = {
        id:0,
        name: "Assets"
      }
    }
 
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
 
  onClose(){
    this.closeModal();
  }
  closeModal(){
    this.modalCtrl.dismiss(null, 'cancel'); 
  }
  getValue(){
    console.log('Category Change', this.category);
    this.subCategoris = this.catInfo[this.category.name];
    console.log('Category Change', this.subCategoris);
  }
  getSubValue(){
    console.log('SubCategory Change', this.subCategory);
  }
//-- Hold Part
  holdRefresh(){

  }

  //--Transaction Part
  refTransaction(){

  }
  export(){

  }
  upload(){

  }
  delete(){
    
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  async presentLoading() {
    this.showLoading = true;
    if(!this.loading){
      this.loading = await this.loadingController.create({
        message: "",
        cssClass:"loadingCOn"
      });
    }
    await this.loading.present();
    if(!this.showLoading)
      this.dismissLoading();
  }
  async dismissLoading() {
    this.showLoading = false;
    if(this.loading)
      await this.loading.dismiss();
  }

}
