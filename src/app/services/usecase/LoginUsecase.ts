import { Injectable } from "@angular/core";
import { LoginRepository } from "../repo/LoginRepository";



@Injectable({
    providedIn: 'root',
})
export class LoginUseCase {
    constructor(
        private _loginRepository: LoginRepository
        ){

    }

    login(email: string, pwd: string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._loginRepository.login(email, pwd).subscribe(
                (result) => {
                    console.log("login ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("login error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    get(user_id: string, provider_id: string, account_id:string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._loginRepository.get(user_id, provider_id, account_id).subscribe(
                (result) => {
                    console.log("get ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("get error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    save(user_id: string, provider_id: string, account_id:string, category:string, sub_category:string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._loginRepository.save(user_id, provider_id, account_id, category, sub_category).subscribe(
                (result) => {
                    console.log("save ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("save error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    update(provider_id: string, account_id:string, category:string, sub_category:string, id:string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._loginRepository.update(provider_id, account_id, category, sub_category,id).subscribe(
                (result) => {
                    console.log("update ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("update error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    delete(id:string): Promise<any>{
        return new Promise( (resolve, reject) => {
            this._loginRepository.delete(id).subscribe(
                (result) => {
                    console.log("delete ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("delete error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
}