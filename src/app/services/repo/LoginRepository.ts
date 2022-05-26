import { Injectable } from "@angular/core";
import { ApiService } from '../api/ApiService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class LoginRepository {
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
    get(user_id: string, provider_id: string, account_id:string): Observable<any> {
        const params = {
            user_id: user_id,
            provider_id: provider_id,
            account_id: account_id
        }
        let postData = new FormData();
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header = {
            Authorization: `Bearer ${token}`,
        }
        for (const [key, value] of Object.entries(params)){
            postData.append(key , value);
        }
            
        
        return  this.httpClient.post<any>(
            this.apiService._REMOTE_END_POINTS.URL_GET_YODLEE, postData, { headers:header }
           );
    }
    save(user_id: string, provider_id: string, account_id:string, category:string, sub_category:string){
        const params = {
            provider_id: provider_id,
            account_id: account_id,
            user_id: user_id,
            category: category,
            sub_category:sub_category
        }
        let user = localStorage.getItem('user');
        let userData = JSON.parse(user);
        let token = userData.access_token;
        let header = {
            Authorization: `Bearer ${token}`,
        }
        let postData = new FormData();
        for (const [key, value] of Object.entries(params))
            postData.append(key , value);
        
        return  this.httpClient.post<any>(this.apiService._REMOTE_END_POINTS.URL_SAVE_YODLEE, postData, { headers:header });
    }
    update(provider_id: string, account_id:string, category:string, sub_category:string, id:string){
        const params = {
            provider_id: provider_id,
            account_id: account_id,
            category: category,
            sub_category:sub_category
        }
        let postData = new FormData();
        for (const [key, value] of Object.entries(params))
            postData.append(key , value);
        
        
            const url = this.apiService._REMOTE_END_POINTS.URL_UPDATE_YODLEE + id;
        return  this.httpClient.post<any>(url, postData, { headers:this.header });
    }
    delete(id:string){
        const url = this.apiService._REMOTE_END_POINTS.URL_DELETE_YODLEE + id;    
        return  this.httpClient.post<any>(url, { headers:this.header });
    }
}