import { Injectable } from "@angular/core";
import { ApiService } from '../api/ApiService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ProviderRepository {
    header:any;
    constructor(
        private apiService:ApiService, 
        private httpClient: HttpClient,
        ){

          this.header= new HttpHeaders();
          this.header.append('Content-Type', 'application/json');
          this.header.append('Access-Control-Allow-Origin', '*');
    }

    login(email: string, pwd: string): Observable<any> {
        const params = {
            email: email,
            password: pwd
        }
        
        let postData = new FormData();
        for (const [key, value] of Object.entries(params))
            postData.append(key , value);
        
            
        console.log('Form Data', params, this.apiService._REMOTE_END_POINTS.URL_POST_LOGIN );
        return  this.httpClient.post<any>(
            this.apiService._REMOTE_END_POINTS.URL_POST_LOGIN, postData, { headers:this.header }
           );
    }

    getProvider(id:string){
        const params = {
            user_id: id
        }
     
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header ={
            Authorization: `Bearer ${token}`,
        }
        let postData = new FormData();
        for (const [key, value] of Object.entries(params)){
            postData.append(key , value);
        }
        return  this.httpClient.post<any>(
            this.apiService._REMOTE_END_POINTS.URL_GET_PROVIDER, postData, { headers:header }
        );
    }
    saveProvider(data:any){
        const params = {
            data:{
                additionalStatus: data.additionalStatus,
                fnToCall: data.fnToCall,
                providerAccountId: data.providerAccountId,
                providerId: data.providerId,
                providerName: data.providerName,
                requestId: data.requestId,
                status: data.status,
                user_id: data.user_id
            }
        }
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header ={
            Authorization: `Bearer ${token}`,
        }
        let postData = new FormData();
        // for (const [key, value] of Object.entries(params))
        //     postData.append(key , value);
        
        return  this.httpClient.post<any>(this.apiService._REMOTE_END_POINTS.URL_SAVE_PROVIDER, params, { headers:header });
    }

    updateProvider(id:string, data:any){
        const params = {
                data:{
                    additionalStatus: data.additionalStatus,
                    fnToCall: data.fnToCall,
                    providerAccountId: data.providerAccountId,
                    providerId: data.providerId,
                    providerName: data.providerName,
                    requestId: data.requestId,
                    status: data.status
                }
           
        }
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header ={
            Authorization: `Bearer ${token}`,
        }
        let postData = new FormData();
        // for (const [key, value] of Object.entries(params))
        //     postData.append(key , value);
        
            
        const url = this.apiService._REMOTE_END_POINTS.URL_UPDATE_PROVIDER + id;
        return  this.httpClient.post<any>(url, data, { headers:header }
        );
    }

    deleteProvider(id:string){
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header ={
            Authorization: `Bearer ${token}`,
        }
        const url = this.apiService._REMOTE_END_POINTS.URL_DELETE_PROVIDER + id;    
        return  this.httpClient.post<any>(url, { headers:header });
    }
}