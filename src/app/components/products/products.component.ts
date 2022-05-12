import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiproductsService } from 'src/app/services/apiproducts.service';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';
import { Store } from 'src/app/ViewModels/Store';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges{
  strore = new Store();
  date:Date=new Date()
  FilteredProd:IProduct[]=[]
  IsPurshased  :boolean;
  selectedCatID:number=1
  prod:IProduct|undefined=undefined;
  newprod:IProduct|undefined=undefined;
  prdListOfCat:IProduct[]=[];
  @Input() receivedSelCatID:number=0;
  @Output() onAddToCart:EventEmitter<IProductQuantity>;
  public displayedColumns = ['name', 'price', 'img','quantity','catID','Edit' ,'Details','Delete'];
  public dataSource = new MatTableDataSource<IProduct>();

  constructor(
            private ApiService:ApiproductsService 
            ,private router:Router         
            ,private cartservice:CartService    
            ,private matDialog: MatDialog ) {
    this.onAddToCart= new EventEmitter<IProductQuantity>(); 
    this.IsPurshased=true;
  }
  ngOnChanges(changes: SimpleChanges): void {

   console.log(this.receivedSelCatID);
    this.ApiService.getProductsByCatID(this.receivedSelCatID).subscribe(ProductList=>{this.prdListOfCat=ProductList} );
 
  }
  ngOnInit() {
    this.ApiService.getAllProducts().subscribe(ProductList=>{this.prdListOfCat=ProductList });
    this.getProductsInformation();
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:43128/${serverPath}`; 
  }
  getProductsInformation(){
    this.ApiService.getAllProducts()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })
  }
  hide()
  {
      this.IsPurshased=!this.IsPurshased;
  }
  selected()
  {
    console.log(this.selectedCatID)
  }
  decrease(itemsCount:number,id:number)
  {
    this.ApiService.getProductByID(id).subscribe(prd=>{this.prod=prd
    this.prod.quantity-=itemsCount;
    this.newprod=this.prod;
    this.ApiService.updatePro(this.newprod,id).subscribe(prd=>{this.newprod=prd});
  });
 }
  AddToCartBtn(itemsCount:number, ProID:number)
  {
   this.ApiService.getProductByID(ProID).subscribe(prd=>{this.prod=prd 
      if(this.prod!=null && this.prod.quantity>=itemsCount)
      {
        let myObj:IProductQuantity=
        {
           id:this.prod.id,
           count:itemsCount,
           name:this.prod.name,
           price:this.prod.price,
           total:this.prod.price*itemsCount
         }
         this.onAddToCart.emit(myObj);
      }
  });
}

  DeleteProduct(id :number)
  {
    var res=confirm("Confirm delete ?")
    if (res==true)
    {
      this.ApiService.deleteProduct(id).subscribe(prd => {
        this.router.navigate(['/Products'])
   });
  }
}
  openDialog(Product:IProduct) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='500px';
    dialogConfig.height='200px';

    dialogConfig.data =Product;
    let dialogRef = this.matDialog.open(ProductDetailsComponent, dialogConfig);
  }
}