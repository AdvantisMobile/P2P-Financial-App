import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPresenter } from '../services/presenter/LoginPresenter';
import { windowTime } from 'rxjs/operators';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  loginForm: FormGroup;
  loading: any;
  showLoading:any;
  erroAuth = true;
  constructor(
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public _presenter: LoginPresenter,
    public formBuilder: FormBuilder
  ) { 
     
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async onSubmit(values: any){
    if(!this.loginForm.valid){
      return;
    }
    console.log('Login Form value', values);
    if(this.erroAuth){
      this.presentLoading();
     }
    const res = await this._presenter.login(this.loginForm.value["email"], this.loginForm.value["password"]);
    console.log('Login: ===>START.TS', res);
    if(!res){
      this.dismissLoading();
      this.erroAuth = false;
      return;
    }
    if(res.status === 200 ){
      localStorage.setItem('user', JSON.stringify(res));
      this.dismissLoading();
      this.navCtrl.navigateForward('tabs/home');
      this.erroAuth = true;
    }else{
      this.dismissLoading();
    }
    
  }
  onLogin(){
    this.navCtrl.navigateForward('tabs/home');
  }
  onForgot(){
    this.navCtrl.navigateForward('forgot');
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
