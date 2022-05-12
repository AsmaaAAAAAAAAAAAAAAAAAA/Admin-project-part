import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartitemlist:any=[]
  public Productlist =new BehaviorSubject<any>([]);   //day5

  constructor() { }
  getproducts()
  {
      return this.Productlist.asObservable();         
  }
  setproducts(product:any)
  {
      this.cartitemlist.push(...product);
      this.Productlist.next(product);
  }
  addtocart(product:any)
  {
      this.cartitemlist.push(product);
      this.Productlist.next(this.cartitemlist);
      this.gettotalprice();
      console.log(this.cartitemlist);
  }
  gettotalprice() :number{
    let grandtotal=0;
    this.cartitemlist.map((a:any)=>
    {
            grandtotal +=a.total;
    })
    return grandtotal;
  }
  removecartitem(product:any)
  {
        this.cartitemlist.map((a:any,index:any)=>{
          if(product.id===a.id)
          {
            this.cartitemlist.splice(index,1)
          }
        })
  }
  removeall(){
    this.cartitemlist=[]
    this.Productlist.next(this.cartitemlist);
  }
}
