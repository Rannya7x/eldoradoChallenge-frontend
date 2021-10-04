import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  api = 'http://localhost:3000/devices'

  getAllData():Observable<any>{
    return this._http.get(`${this.api}`);
  }

  createData(data:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.api}`, data);
  }

  deleteData(id:any):Observable<any>{
    let Id = id;
    return this._http.delete(`${this.api}/${Id}`)
  }

  apiCategories = 'http://localhost:3000/categories'

  getAllDataCategories():Observable<any>{
    return this._http.get(`${this.apiCategories}`);
  }

  createDataCategory(data:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.apiCategories}`, data);
  }

  deleteCategory(id:any):Observable<any>{
    let Id = id;
    return this._http.delete(`${this.apiCategories}/${Id}`)
  }
}
