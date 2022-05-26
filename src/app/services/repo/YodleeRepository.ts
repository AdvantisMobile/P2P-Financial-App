import { Injectable } from "@angular/core";
import { ApiService } from '../api/ApiService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class YodleeRepository {
  httpOptions:any = null;
    constructor(
        private apiService:ApiService, 
        private httpClient: HttpClient
        ){

        }
        yodleeGetToken(){
            let user = localStorage.getItem('user');
            let userData = JSON.parse(user);
            let loginName:string = userData.user.email;
            const url = environment.Y_ENDPOINT + "/auth/token";
            
            let header = {
              'Content-Type':'application/x-www-form-urlencoded',
              'Accept':'*/*',
              "Api-Version":"1.1",
              "loginName":loginName
            }
            let body =  new URLSearchParams({
              clientId: environment.Y_CLIENT_ID,
              secret: environment.Y_CLIENT_SECRET
            });
            
            console.log('Header==>> YodleeRepository.TS', header, body);
            return  this.httpClient.post<any>(url,body, {headers:header});
        }
        yodleeCreatUser(){
            
            let user = localStorage.getItem('user');
            let userData = JSON.parse(user);
            let loginName:string = userData.user.email;
            const url = environment.Y_ENDPOINT + "/user/register";
            const token = localStorage.getItem('token');
            let header ={
              "Api-Version": "1.1",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
            
    
            const params = {
                user: loginName,
            }
            let postData = new FormData();
            for (const [key, value] of Object.entries(params))
                postData.append(key , value);
                return  this.httpClient.post<any>(url, postData, { headers:header });
        }
        yodleeGetDetail(provider:any, token:any){
            const url = environment.Y_ENDPOINT + "/accounts?requestId="+(provider?.requestId??"ABCDEF")+"&providerAccountId=" + (provider?.providerAccountId ?? "12345678");
            let header ={
              "Api-Version": "1.1",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetTransactions(data:any, token:any){
            // data = {
            //     accountId: "", // comma separated
            //     baseType: "", // DEBIT, CREDIT
            //     categoryId: "", // comma separated
            //     categoryType: "", // UNCATEGORIZE, INCOME, TRANSFER, EXPENSE, DEFERRED_COMPENSATION
            //     conatiner: "", // bank, creditCard, investment, insurance, loan
            //     detailCategoryId: "", // comma separated
            //     fromDate: "", // YYYY-MM-DD
            //     highLevelCategoryId: "", // comma separated
            //     keyword: "", // search text
            //     skip: "", // int32 Min 0
            //     toDate: "", // YYYY-MM-DD
            //     top: "", // int32 Max 500
            //     type: "", // Transaction Type ( SELL, SWEEP ...) for bank, creditCard, investment
            //   },
        
            const url = environment.Y_ENDPOINT+ "/transactions?accountId=" +
            (data?.accountId ?? "") +
            (data?.baseType ? "&baseType=" + data?.baseType : "") +
            (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
            (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
            (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
            (data?.detailCategoryId
              ? "&detailCategoryId=" + data?.detailCategoryId
              : "") +
            (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
            (data?.highLevelCategoryId
              ? "&highLevelCategoryId=" + data?.highLevelCategoryId
              : "") +
            (data?.keyword ? "&keyword=" + data?.keyword : "") +
            (data?.skip ? "&skip=" + data?.skip : "") +
            (data?.toDate ? "&toDate=" + data?.toDate : "") +
            (data?.top ? "&top=" + data?.top : "") +
            (data?.type ? "&type=" + data?.type : "");
           
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetTransactionsCount(data: any, token:any){
            const url = environment.Y_ENDPOINT +"/transactions/count?accountId=" +
            (data?.accountId ?? "") +
            (data?.baseType ? "&baseType=" + data?.baseType : "") +
            (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
            (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
            (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
            (data?.detailCategoryId
              ? "&detailCategoryId=" + data?.detailCategoryId
              : "") +
            (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
            (data?.highLevelCategoryId
              ? "&highLevelCategoryId=" + data?.highLevelCategoryId
              : "") +
            (data?.keyword ? "&keyword=" + data?.keyword : "") +
            (data?.toDate ? "&toDate=" + data?.toDate : "") +
            (data?.type ? "&type=" + data?.type : "");
            
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
    
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetHoldings(data:any, token:any){
            // data = {
            //     accountId: "", // comma separated
            //     "assetClassification.classificationType": "", // Country, Sector, ...
            //     classificationValue: "", // US, ...
            //     include: "", // assetClassification
            //     providerAccountId: "", // providerAccountId
            //   },
            //   token = "",
            const url = environment.Y_ENDPOINT + "/holdings?accountId=" +
            (data?.accountId ?? "") +
            (data?.["assetClassification.classificationType"]
              ? "&assetClassification.classificationType=" +
                data?.["assetClassification.classificationType"]
              : "") +
            (data?.classificationValue
              ? "&classificationValue=" + data?.classificationValue
              : "") +
            (data?.include ? "&include=" + data?.include : "") +
            (data?.providerAccountId
              ? "&providerAccountId=" + data?.providerAccountId
              : "");
            
              let header = new HttpHeaders();
                header.append("Api-Version","1.1");
                header.append("Content-Type","application/json");
                header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetUserData(data:any, token:any){
            // data = {
            //     fromDate: "", // YYYY-MM-DD
            //     toDate: "", // YYYY-MM-DD
            //     loginName: "", // user email
            //   },
            //   token = "",
            const url= environment.Y_ENDPOINT + "/dataExtracts/userData?loginName=" +
            (data?.loginName ?? "") + "&fromDate=" + data?.fromDate + "&toDate=" + data?.toDate;
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
    
        }
        yodleeGetNetworthSummary(data:any, token:any){
            // data = {
            //     accountIds: "", // comma separated
            //     conatiner: "", // bank, creditCard, investment, insurance, loan
            //     fromDate: "", // YYYY-MM-DD
            //     include: "details", // details
            //     interval: "", // D-daily, W-weekly, M-monthly
            //     skip: "", // int32 Min 0
            //     toDate: "", // YYYY-MM-DD
            //     top: "", // int32 Max 500
            //   },
            //   token = "",
            const url = environment.Y_ENDPOINT + "/derived/networth?accountIds=" +
            (data?.accountIds ?? "") +
            (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
            (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
            (data?.include ? "&include=" + data?.include : "") +
            (data?.interval ? "&interval=" + data?.interval : "") +
            (data?.skip ? "&skip=" + data?.skip : "") +
            (data?.toDate ? "&toDate=" + data?.toDate : "") +
            (data?.top ? "&top=" + data?.top : "");
           
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
    
        }
        yodleeGetTransactionSummary(data:any, token:any){
            const url = environment.Y_ENDPOINT + "/derived/transactionSummary?accountId=" +
            (data?.accountId ?? "") +
            (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
            (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
            (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
            (data?.groupBy ? "&groupBy=" + data?.groupBy : "") +
            (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
            (data?.include ? "&include=" + data?.include : "") +
            (data?.includeUserCateogry
              ? "&includeUserCateogry=" + data?.includeUserCateogry
              : "") +
            (data?.interval ? "&interval=" + data?.interval : "") +
            (data?.toDate ? "&toDate=" + data?.toDate : "");
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetHoldingSummary(data:any, token:any){
            // data = {
            //     accountIds: "", // comma separated
            //     classificationType: "", // Country, Sector, ...
            //     include: "details", // details
            //   },
            //   token = "",
            const url = environment.Y_ENDPOINT + "/derived/holdingSummary?accountIds=" +
            (data?.accountIds ?? "") +
            (data?.classificationType
              ? "&classificationType=" + data?.classificationType
              : "") +
            (data?.include ? "&include=" + data?.include : "");
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetStatements(data:any, token:any){
            // data = {
            //     accountId: "", // comma separated
            //     container: "", // creditCard, loan, insurance
            //     fromDate: "", // YYYY-MM-DD
            //     isLatest: "", // true, false
            //     status: "", // ACTIVE, TO_BE_CLOSED, CLOSED
            //   },
            //   token = "",
            const url = environment.Y_ENDPOINT + "/statements?accountId=" +
            (data?.accountId ?? "") +
            (data?.container ? "&container=" + data?.container : "") +
            (data?.isLatest ? "&isLatest=" + data?.isLatest : "") +
            (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
            (data?.status ? "&status=" + data?.status : "");
    
            let header = new HttpHeaders();
            header.append("Api-Version","1.1");
            header.append("Content-Type","application/json");
            header.append('Authorization', `Bearer ` + token);
            return  this.httpClient.get<any>(url,{ headers:header });
        }
        yodleeGetHoldingSecurities (data:any, token:any){
            // data = {
            //     holdingId: "", // comma separated
            //   },
            //   token = ""
          const url = environment.Y_ENDPOINT + "/holdings/securities?holdingId=" +(data?.holdingId ?? "")
          let header = new HttpHeaders();
          header.append("Api-Version","1.1");
          header.append("Content-Type","application/json");
          header.append('Authorization', `Bearer ` + token);
          
          return  this.httpClient.get<any>(url,{ headers:header });
        }
     
}