import { Injectable } from '@angular/core';
import { ICategory } from '../ViewModels/ICategory';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

  constructor(private httpClient: HttpClient)
   {  }
    getAllCategory(): Observable<ICategory[]>
    {
      return this.httpClient.get<ICategory[]>('http://localhost:43128/api/category') ;     
  
    }
}
