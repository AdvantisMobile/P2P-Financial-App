import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProviderPresenter } from '../services/presenter/ProviderPresenter';
import { LoginPresenter } from '../services/presenter/LoginPresenter';
import { YodleePresenter } from '../services/presenter/YodleePresenter';
import { of } from 'rxjs';
@Component({
  selector: 'app-mapping-account',
  templateUrl: './mapping-account.page.html',
  styleUrls: ['./mapping-account.page.scss'],
})
export class MappingAccountPage implements OnInit {
  tab: string = "unmap";

  mapInfo: any;
  categories: any = [];
  subCategories:any = [];

  noProviders: any = [];
  assetsProviders: any = [];
  liaProviders: any = [];
  insuLifeProviders: any = [];
  insuGeneralProviders: any = [];

  liveAccounts: any = [];
  liveProviders:any = [];

  manualAccounts: any = [];
  manualProviders: any = [];

  userId:any;
  constructor(
    private navCtrl: NavController,
    public _providerPresenter: ProviderPresenter,
    public _yodleePresenter: YodleePresenter,
    public _yodleeAccount: LoginPresenter
  ) { 
    let user = localStorage.getItem('user');
    let userData = JSON.parse(user);
    this.userId = userData.user.id;
    this.categories = [];
  }

  ngOnInit() {
    this.initProviders();
  }
  initProviders(){
    let cat:any = [];
    let sub:any = [];
    fetch('./assets/js/categories.json').then(res => res.json())
    .then(json => {
      this.mapInfo = json;
      for (const [key, value] of Object.entries(json)){
        cat.push(key);
        sub.push(value);
      }
      for(let i = 0 ;i < cat.length; i++){
        let item = sub[i];
        for(let j = 0 ; j < item.length ; j++){
          let data = {
            id: i,
            sub_id: j,
            cat: cat[i],
            sub_cat: item[j],
            show: false,
            isManual: false,
            accounts: []
          }
          if(data.id == 0){
            this.assetsProviders.push(data);
          }else if(data.id ==1){
            this.liaProviders.push(data);
          }else if( data.id ==2){
            this.insuLifeProviders.push(data);
          }else{
            this.insuGeneralProviders.push(data);
          }
          this.categories.push(data);
         
        }
      }
    });
    console.log('MAP DATAS==>', this.categories);
    this.getProviders();
  }
  async getProviders(){
    const res = await this._providerPresenter.getProvider(this.userId);
    console.log('Providers Data ===>>', res);
    if(res){
      let tempProviders = res['yodleeProviders'];
      this.manualProviders = res['manualAccounts'];
      this.mapping();
      this.mappinglive(tempProviders);
    }
    
  }
  ///-------------Manual Provide Part -----------------------------
  mapping(){
    for(let i = 0; i< this.categories.length;i++){
      let item = this.categories[i];
      for(let j = 0; j< this.manualProviders.length;j++){
        let mItem = this.manualProviders[j];
        if((item.cat == mItem.category.category) && (item.sub_cat == mItem.category.sub_category)){
          item['show'] = true;
          item['isManual'] = true;
          item.accounts.push(mItem);
        }
      }
    }
  }
  async mappinglive(datas:any){
    let resToken:any = await this._yodleePresenter.yodleeGetToken();
    let token = resToken?.token?.accessToken;
      
      for(let i = 0; i < datas.length; i++){
        let item = datas[i];
        let resD:any = await this._yodleePresenter.yodleeGetDetail(item, token);
        console.log('Provide details',resD?.account);
        if(resD){
          let accounts :any = [];
          accounts = resD?.account;
          for(let j=0;j < accounts.length;j++){
            this.liveProviders.push(accounts[j]);
            const mapRes =  await this._yodleeAccount.get(this.userId, accounts[j].providerId, accounts[j].id);
            console.log('Mapped Data', mapRes);
            if(mapRes == 'undefined'){
              this.noProviders.push(accounts[j]);
              console.log('Un mapped', this.noProviders);
            }

          }
        }
      }
  }
   
  back(){
    this.navCtrl.back();
  }
  accountDetails(){
    
  }
}
