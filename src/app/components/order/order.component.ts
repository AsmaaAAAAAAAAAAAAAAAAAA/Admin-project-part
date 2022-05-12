import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiCategoriesService } from 'src/app/services/api-categories.service';
import { ApiproductsService } from 'src/app/services/apiproducts.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,AfterViewInit {
  selectedCatID:number=0;
  totalPrice:number=0;
  prod:IProduct|undefined=undefined;
  newprod:IProduct|undefined=undefined;
  category:ICategory[]=[]
  ReceivedCartItems:IProductQuantity[]=[]
  @ViewChild(ProductsComponent) ProductsCompObj!: ProductsComponent;
  constructor(private Apiservice:ApiproductsService
    ,private Icatservice:ApiCategoriesService) { 
      this.Icatservice.getAllCategory().subscribe(catlist=>this.category=catlist)
  }

  ngAfterViewInit(): void {
    console.log(this.Apiservice.getAllProducts())
  }
  ngOnInit() {
  }
  showCart(CartObj:IProductQuantity)
  {
     console.log(CartObj);
     this.ReceivedCartItems.push(CartObj);
     this.totalPrice+=CartObj.total;
  }
  confirm()
  {
    
   /* var ExternalProductList=this.Apiservice.getAllProducts().subscribe(prd=>{this.ReceivedCartItems=prd)});
    this.ReceivedCartItems.forEach(element => {
      var pro=ExternalProductList.find(prd=>prd.id==element.id)
      if(pro!=null)
      {
        pro.quantity-=element.count;
      }
    }); 
  
    this.ReceivedCartItems=[]*/
  }
  RemoveItem(item:IProductQuantity)
  {
      const index=this.ReceivedCartItems.findIndex(i=>i.id==item.id);
      this.totalPrice-=item.total;
      this.ReceivedCartItems.splice(index,1);
  }
  decrease(item:IProductQuantity)
  {
    if(item.count>1)
    {
      item.count--;
      this.totalPrice-=item.price;
      item.total-=item.price;
    }
  }
  increase(item:IProductQuantity)
  {
    this.Apiservice.getProductByID(item.id).subscribe(prd=>this.prod=prd);
    if(this.prod && item.count<this.prod.quantity)
    {
      item.count++;
      this.totalPrice+=item.price;
      item.total+=item.price;
    } 
  }

}
