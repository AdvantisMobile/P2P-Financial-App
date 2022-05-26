import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public user:any;
  public accountList: any = [];
  constructor(
      public domSanitizer: DomSanitizer
  
      ){
    this.init();
  }

  async init() {
    const userData= localStorage.getItem('user');
    this.user = JSON.parse(userData);
  }
  addData(data: any){
    this.accountList.push(data);
  }
  getData(){
      return this.accountList;
  }
    
}