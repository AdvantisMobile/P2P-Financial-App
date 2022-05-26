import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ModalController, LoadingController } from '@ionic/angular';
import { YodleePresenter } from '../../services/presenter/YodleePresenter';
import { ProviderPresenter } from '../../services/presenter/ProviderPresenter';
import { DataService } from '../../services/API/DataService';
import { environment} from '../../../environments/environment';
import { fastlink } from '../../../assets/js/fastlink.js';
import { useEffect, useState } from 'react';
import { UserExperienceFlowType } from 'yodlee-react-hook';
const CONTAINER_ID = "yodlee-fastlink";
 
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
 
export class LiveComponent implements OnInit {
  loading: any;
  showLoading:any;
  fastUrl: any;
  didInit: boolean = false;
  
  userId: string;
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
   }

  ngOnInit() {
    this.getToken();
  }
  async getToken(){
    this.presentLoading();
    const res = await this._yodleePresent.yodleeGetToken();
     
    console.log('Yodlee Token', res);
    this.didInit = true;
    this.dismissLoading();
    this.openLink(res);
  }
  openLink(data:any){
    this.fastUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(environment.Y_FAST_LINK);
    let token = data?.token?.accessToken;

    window.fastlink.open(
      {
        fastLinkURL: environment.Y_FAST_LINK,
        accessToken: `Bearer ${token}`,
        params: {
          configName: "Aggregation",
        },
        forceIframe: true,
        onSuccess: (res = {}) => {
          // setGeneralLoading(dispatch, false)
          this.onSave(res);
          
        },
        onError: (res:any) => {
          // setGeneralLoading(dispatch, false)
          console.log("yodlee error", res);
        },
        onClose: (res:any) => {
          // setGeneralLoading(dispatch, false)
        },
        onEvent: (res:any) => {
          // setGeneralLoading(dispatch, false)
          console.log("yodlee event", res);
        },
      },
      CONTAINER_ID
    );
  }
  async onSave(data:any){
    data['user_id'] = this.userId;
    console.log('Fast Link Data===>', data);
    
    const resProvider = await this._providerPresent.saveProvider(data);
    console.log('Res Provider', resProvider);
    
    let res:any = await this._yodleePresent.yodleeGetToken();
    let token = res?.token?.accessToken;
    
    const yRes = await this._yodleePresent.yodleeGetDetail(data, token);
    console.log('Get Details Response', JSON.stringify(yRes));
    
    localStorage.setItem('accounts', JSON.stringify(yRes));
    this._dataService.addData(yRes);
    this.onClose();
  }
  onClose(){
    this.closeModal();
  }
  closeModal(){
    this.modalCtrl.dismiss(null, 'cancel'); 
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
