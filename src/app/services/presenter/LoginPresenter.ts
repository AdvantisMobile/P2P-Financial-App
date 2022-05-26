import { Injectable  } from '@angular/core';

import { LoginUseCase } from '../usecase/LoginUsecase';

@Injectable({
    providedIn: 'root',
})

export class LoginPresenter {

    constructor(private _loginUseCase: LoginUseCase){}
    async login(email: string, pwd: string) {
        try {
            return await this._loginUseCase.login(email,pwd );
        } catch (error) {
            console.log(error)
        }
    }
    //Yodlee Acccount
    async get(user_id: string, provider_id: string, account_id:string) {
        try {
            return await this._loginUseCase.get(user_id,provider_id,account_id);
        } catch (error) {
            console.log(error)
        }
    }
    async save(user_id: string, provider_id: string, account_id:string, category:string, sub_category:string) {
        try {
            return await this._loginUseCase.save(user_id,provider_id, account_id, category, sub_category);
        } catch (error) {
            console.log(error)
        }
    }
    async update(provider_id: string, account_id:string, category:string, sub_category:string, id:string) {
        try {
            return await this._loginUseCase.update(provider_id, account_id, category, sub_category, id);
        } catch (error) {
            console.log(error)
        }
    }
    async delete(id:string) {
        try {
            return await this._loginUseCase.delete(id);
        } catch (error) {
            console.log(error)
        }
    }
    

}