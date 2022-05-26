import { Injectable  } from '@angular/core';
import { ProviderUseCase } from '../usecase/ProviderUsecase';

@Injectable({
    providedIn: 'root',
})

export class ProviderPresenter {

    constructor(private _clientUseCase: ProviderUseCase){}
    async login(email: string, pwd: string) {
        try {
            return await this._clientUseCase.login(email,pwd );
        } catch (error) {
            console.log(error)
        }
    }
    //Yodlee Provider
    async getProvider(id:string){
        try {
            return await this._clientUseCase.getProvider(id);
        } catch (error) {
            console.log(error)
        }
    }
    async saveProvider(data:any){
        try {
            return await this._clientUseCase.saveProvider(data);
        } catch (error) {
            console.log(error)
        }
    }
    async updateProvider(id:string, data:any){
        try {
            return await this._clientUseCase.updateProvider(id, data);
        } catch (error) {
            console.log(error)
        }
    }
    async deleteProvider(id:string){
        try {
            return await this._clientUseCase.deleteProvider(id);
        } catch (error) {
            console.log(error)
        }
    }

}