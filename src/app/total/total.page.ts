import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AccountModalPage } from '../Modal/account-modal/account-modal.page'
import { ModalComponent } from '../Modal/modal/modal.component';
@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
  financialList: any = [];
  financialListL:any = [];
  totalFValue: any;
  showF:boolean = true;

  insuranceList: any = [];
  totalLiveValue: any;
  showI: boolean = true;
  
  cashList: any = [];
  totalCValue: any;
  showC:boolean = true;

  fromDate: any;
  toDate: any;
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.initialize();   
  }
  initialize(){
    this.fromDate = '2022-01-01';
    this.toDate = '2022-01-18';
    this.totalFValue = 498806.75;
    this.totalCValue = 0.00;
    this.financialList = [
      {
        name:'BANK ACCOUNTS - TRANSACTION',
        amount: "2620.3",
        show:true,
        accounts:[
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx3681",
            accountStatus: "ACTIVE",
            accountType: "SAVINGS",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 450.15},
            balance: {currency: 'AUD', amount: 450.15},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 450.15},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "Westpac" ,
          },
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx2539",
            accountStatus: "ACTIVE",
            accountType: "SAVINGS",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 2170.15},
            balance: {currency: 'AUD', amount: 2170.15},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 2170.15},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "ANZ" ,
          }

        ]
      },
      {
        name:'BANK ACCOUNTS - SAVING',
        amount: "2170.15",
        show:true,
        accounts:[
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx3199",
            accountStatus: "ACTIVE",
            accountType: "SAVINGS",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 2170.15},
            balance: {currency: 'AUD', amount: 2170.15},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 2170.15},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "ANZ" ,
          }

        ]
      },
      {
        name:'SHARES',
        amount: "2170.15",
        show:true,
        accounts:[
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx3199",
            accountStatus: "ACTIVE",
            accountType: "SAVINGS",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 2170.15},
            balance: {currency: 'AUD', amount: 2170.15},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 2170.15},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "ANZ" ,
          }

        ]
      }      
    ];
    this.financialListL = 
    [
      {
        name:'INVESTMENT PROPERTY LOANS',
        amount: "491846.14",
        show:true,
        accounts:[
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx6325",
            accountStatus: "ACTIVE",
            accountType: "CHECKING",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 491846.14},
            balance: {currency: 'AUD', amount: 491846.15},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 491846.15},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "ANZ" ,
          },
         
        ]
      }
    ];
    this.insuranceList = [
      {
        name:'LIFE COVER - NON SUPER',
        amount: "2620.87",
        show:true,
        accounts:[
          {
            CONTAINER: "bank",
            accountName: "Westpac Choice",
            accountNumber: "xxxx6325",
            accountStatus: "ACTIVE",
            accountType: "CHECKING",
            aggregationSource: "USER",
            availableBalance: {currency: 'AUD', amount: 750000.00},
            balance: {currency: 'AUD', amount: 2400.00},
            createdDate: "2022-01-11T16:07:19Z",
            currentBalance: {currency: 'AUD', amount: 2400.00},
            id: 10019825,
            includeInNetWorth: true,
            isAsset: true,
            isManual: false,
            lastUpdated: "2022-01-13T03:20:07Z",
            nickname: "Westpac Choice",
            providerAccountId: 10005452,
            providerId: "3885",
            providerName: "MLC" ,
          },
         
        ]
      }
    ];
  }
  back(){
    this.navCtrl.back();
  }
  async onRefresh(){
    const modalOpt = {
      component: ModalComponent,
      cssClass:'confirm-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        ID: 'refresh'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('CONFIRE MODAL RETURN DATA----> TOTAL-ACCOUNT.TS',data)
    });
    await modal.present();
  }
  showFinalcial(){
    this.showF = !this.showF;
  }
  showInsurance(){
    this.showI = !this.showI;
  }
  showCash(){
    this.showC = !this.showC;
  }
  showItemDetails(item:any){
    item.show = !item.show;
  }
  deleteInsurance(account:any){
    console.log('Delete Insurance Item', account);

    let app  = this.insuranceList[0].accounts;
    console.log('App', this.insuranceList[0].accounts);
    for(let i = 0; i< app.length;i++){
      if(app[i].id = account.id){
        this.insuranceList[0].accounts.splice(i ,1);
      }
    }
   
  }
  async accountDetailsL(item:any){
    const modalOpt = {
      component: AccountModalPage,
      cssClass:'detail-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        model: item
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('ACCOUNT DETAIL MODAL RETURN DATA----> TOTAL-ACCOUNT.TS',data)
    });
    await modal.present();
  }
}
