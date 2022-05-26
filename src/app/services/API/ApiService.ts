import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public static URL_API = `${environment.BASE_URL}`; // QA Mode
  
    //src/services/jgPersonasLogin.php
    public _REMOTE_END_POINTS = {
        URL_POST_LOGIN:`${ApiService.URL_API}auth/login`,
       
        URL_GET_PROVIDER: `${ApiService.URL_API}yodleeproviders/get`,
        URL_SAVE_PROVIDER: `${ApiService.URL_API}yodleeproviders/store`,
        URL_UPDATE_PROVIDER: `${ApiService.URL_API}yodleeproviders/update/`,
        URL_DELETE_PROVIDER: `${ApiService.URL_API}yodleeproviders/delete/`,
        
        URL_GET_YODLEE: `${ApiService.URL_API}yodleeaccount/get`,
        URL_SAVE_YODLEE: `${ApiService.URL_API}yodleeaccount/store`,
        URL_UPDATE_YODLEE: `${ApiService.URL_API}yodleeaccount/update/`,
        URL_DELETE_YODLEE: `${ApiService.URL_API}yodleeaccount/delete/`,
    }
  

}
// Backend API

// Yodlee provider

// get(post):
//     yodleeproviders/get
//     body: {
//         user_id: integer
//     }

// Save(post):
//     yodleeproviders/store
//     body: {
//         data: {
//             additionalStatus: string
//             fnToCall: string
//             providerAccountId: string
//             providerId: string
//             providerName: string
//             requestId: string
//             status: string

//             user_id: integer
//         }
//     }

// update(post): 
//     yodleeproviders/update/${id}
//     body: {
//         data: {
//             additionalStatus: string
//             fnToCall: string
//             providerAccountId: string
//             providerId: string
//             providerName: string
//             requestId: string
//             status: string

//             user_id: integer
//         }
//     }

// delete(post): 
//     yodleeproviders/delete/${id}