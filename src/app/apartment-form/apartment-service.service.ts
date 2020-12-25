import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormInterface} from './form-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {

  constructor(private http:HttpClient) { }
  
  

  getApartDetails():Observable<FormInterface>{
    return this.http.get<FormInterface>('http://localhost:3000/resource');
  }

  addApartDetails(body):Observable<FormInterface>{
    return this.http.post<FormInterface>('http://localhost:3000/resource',body);
  }
  
}
