import { Injectable } from "@angular/core";
import { ProviderRepository } from "../repo/ProviderRepository";



@Injectable({
    providedIn: 'root',
})
export class ProviderUseCase {
    constructor(
        private _clientRepository: ProviderRepository
        ){

    }

    login(email: string, pwd: string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._clientRepository.login(email, pwd).subscribe(
                (result) => {
                    console.log("login ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("login error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        });
    }
    getProvider(id:string){
        return new Promise( (resolve, reject) => {
            this._clientRepository.getProvider(id).subscribe(
                (result) => {
                    console.log("Get Provider Ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("get provider error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        });
    }
    saveProvider(data:any){
        return new Promise( (resolve, reject) => {
            this._clientRepository.saveProvider(data).subscribe(
                (result) => {
                    console.log("save Provider Ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("save provider error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        });
    }
    updateProvider(id:string, data:any){
        return new Promise( (resolve, reject) => {
            this._clientRepository.updateProvider(id, data).subscribe(
                (result) => {
                    console.log("update Provider Ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("update provider error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        });
    }
    deleteProvider(id:string){
        return new Promise( (resolve, reject) => {
            this._clientRepository.deleteProvider(id).subscribe(
                (result) => {
                    console.log("delete Provider Ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("delete provider error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        });
    }
}