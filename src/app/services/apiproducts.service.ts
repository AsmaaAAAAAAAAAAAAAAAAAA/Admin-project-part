import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, Observable, retry } from 'rxjs';
import { IProduct } from '../ViewModels/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiproductsService {
  private httpOptions;
  ProductList: IProduct[]=[];
  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>('http://localhost:43128/api/product') ;     
      
  }
  getProductsByCatID(catID: number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`http://localhost:43128/api/Product/Catid?catID=${catID}`);
  }
  getProductByID(prdID: number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`http://localhost:43128/api/Product/${prdID}`);
  }
  AddnewProduct(newPrd: IProduct): Observable<IProduct>
  {
    console.log("before api  "+newPrd);
    return this.httpClient.post<IProduct>(`http://localhost:43128/api/Product`,newPrd,this.httpOptions);
  }
  deleteProduct(prdID:number ) 
{ 
   return this.httpClient.delete<IProduct>(`http://localhost:43128/api/product/${prdID}`, this.httpOptions);
}
updatePro(updatedPro: IProduct, id: number): Observable<IProduct> 
  {
    return this.httpClient.patch<IProduct>(`http://localhost:43128/api/Product/${id}`, updatedPro)
  }
  getPrdIDsList(): number[]
  {
    return this.ProductList.map(prd=>prd.id);
  }
} 
