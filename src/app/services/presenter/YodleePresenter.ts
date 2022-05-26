import { Injectable  } from '@angular/core';

import { YodleeUseCase } from '../usecase/YodleeUsecase';

@Injectable({
    providedIn: 'root',
})

export class YodleePresenter {

    constructor(private _yodleeUseCase: YodleeUseCase){}
    
    async yodleeGetToken(){
        try {
            return await this._yodleeUseCase.yodleeGetToken();
        } catch (error) {
            console.log(error)
        }
    }
    async yodleeCreatUser(){
        try {
            return await this._yodleeUseCase.yodleeCreatUser();
        } catch (error) {
            console.log(error)
        }
    }
    async yodleeGetDetail(provider:any, token:any){
        try {
            return await this._yodleeUseCase.yodleeGetDetail(provider, token);
        } catch (error) {
            console.log(error)
        }
    }

}