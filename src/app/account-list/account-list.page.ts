import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/API/DataService';
import { AccountModalPage } from '../Modal/account-modal/account-modal.page'
import { ProviderPresenter } from '../services/presenter/ProviderPresenter';
import { LoginPresenter } from '../services/presenter/LoginPresenter';
import { YodleePresenter } from '../services/presenter/YodleePresenter';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {
  loading: any;
  showLoading:any;

  accounts: any;
  accountName:any;

  liveCount: any;
  manualCount: any;
  liveBalance:any;
  manualBalance:any;

  showLive:boolean = true;
  showManual:boolean = true;
  userId:any;

  liveAccounts: any = [];
  liveProviders:any = [];

  manualAccounts: any = [];
  manualProviders: any = [];
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    public _dataService: DataService,
    public loadingController: LoadingController,
    public _providerPresenter: ProviderPresenter,
    public _yodleePresenter: YodleePresenter,
    public _yodleeAccount: LoginPresenter
  ) { 
       
    this.liveBalance = 860908.88;
    this.manualBalance = 0;
    this.manualCount = 0;
  }

  ngOnInit() {
    this.initializePage();    
  }
  initializePage(){
    let user = localStorage.getItem('user');
    let userData = JSON.parse(user);
    this.userId = userData.user.id;
   
    this.getProviders();
  }
  async getProviders(){
    console.log('User ID', this.userId);
    this.presentLoading();
    const res = await this._providerPresenter.getProvider(this.userId);
    console.log('Providers From DB=====>', res);
    if(res){
      let tempProviders = res['yodleeProviders'];
      this.manualProviders = res['manualAccounts'];
      this.getManualAccount(this.manualProviders);
      let resToken:any = await this._yodleePresenter.yodleeGetToken();
      let token = resToken?.token?.accessToken;
      for(let i=0; i < tempProviders.length; i++){
        let item = tempProviders[i];
        console.log('Provide Data', item);
        let resD:any = await this._yodleePresenter.yodleeGetDetail(item, token);
        console.log('provide details',resD?.account);
        if(resD){
          this.dismissLoading();
          let accounts :any = [];
          accounts = resD?.account;
          for(let j=0;j<accounts.length;j++){
            this.liveProviders.push(accounts[j]);
          }
        }else{
          this.dismissLoading();
        }
      }
      this.dismissLoading();
      this.sort();
    }else{
      this.dismissLoading();
    }
  }
  getManualAccount(data:any){
    this.manualCount = data.length;
    for(let i = 0; i< data.length; i++){
      if(data[i].current_balance){
        this.manualBalance += data[i].current_balance;
      }
    }
  }
  groupArrayOfObjects(list:any, key:any) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  sort(){
    let arrayFinal = [];
    let sortArray = this.groupArrayOfObjects(this.liveProviders, "providerName");
    for (const [key, value] of Object.entries(sortArray)){
        let item = {
          name: key,
          accounts: value,
        };
        arrayFinal.push(item);
    }
    console.log('arrayFinal', arrayFinal);
    for(let i = 0; i < arrayFinal.length; i++){
      let item = arrayFinal[i];
      let bal = 0;
      for(let j = 0; j < item.accounts.length; j++){
        let a = item.accounts[j];
        bal  = bal + a.balance.amount;
      }
      let account = {
        name: item.name,
        count: item.accounts.length,
        accounts: item.accounts,
        show: true,
        amount: bal
      }
      this.liveAccounts.push(account);
    }
    console.log('liveAccounts', this.liveAccounts);
  }
  back(){
    this.navCtrl.back();
  }
  //--Live Part--
  refresh(){

  }
  delete(){

  }
  showDetails(item:any){
    item.show = !item.show;
  }
 async accountDetailsL(item:any){
    const modalOpt = {
      component: AccountModalPage,
      cssClass:'detail-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        model: item,
        type: 'live'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('ACCOUNT DETAIL MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
  }
  //--Manual Part--
  showManualItems(){
    this.showManual = !this.showManual;
  }
  deleteItem(){

  }
  async accountDetailsM(mAccount:any){
    const modalOpt = {
      component: AccountModalPage,
      cssClass:'detail-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        model: mAccount,
        type: 'manual'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('ACCOUNT DETAIL MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
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
