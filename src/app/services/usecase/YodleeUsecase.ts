import { Injectable } from "@angular/core";
import { YodleeRepository } from "../repo/YodleeRepository";



@Injectable({
    providedIn: 'root',
})
export class YodleeUseCase {
    constructor(
        private _yodleeRepository: YodleeRepository
        ){
            
        }
    
    yodleeGetToken(){
        return new Promise( (resolve, reject) => {
            this._yodleeRepository.yodleeGetToken().subscribe(
                (result) => {
                    console.log("Get Token ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("Get Token error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    yodleeCreatUser(){
        return new Promise( (resolve, reject) => {
            this._yodleeRepository.yodleeCreatUser().subscribe(
                (result) => {
                    console.log("Create user ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("Create user error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
    yodleeGetDetail(provider:any, token:any){
        return new Promise( (resolve, reject) => {
            this._yodleeRepository.yodleeGetDetail(provider, token).subscribe(
                (result) => {
                    console.log("Get Details ok ");
                    resolve(result)
                },
                (error) => {
                    console.log("Get Details error: " +JSON.stringify(error));
                    reject(error)
                }
            )
        })
    }
}