import { Location } from '@angular/common';
import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiproductsService } from 'src/app/services/apiproducts.service';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { IProduct } from 'src/app/ViewModels/IProduct';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private currprdID: number = 0;
  private prdIDsList: number[] = [];
  
id:number=0;
name:string="";
price:number=0;
quantity:number=0;
img:string="";
  currprd: IProduct | undefined = undefined;
  Id: number=0;
  constructor(private activatedRoute: ActivatedRoute, private prdserviceAPI:ApiproductsService,
    private location: Location,private router:Router, private dialogRef: MatDialogRef < ProductsComponent > , @Inject(MAT_DIALOG_DATA) data:IProduct) {  
      this.currprdID = data.id  
  }
  ngOnInit(): void {
    this.prdserviceAPI.getAllProducts(). subscribe(result => {  
      this.currprd = result.find(a => a.id == this.currprdID);  
      this.name = String(this.currprd?.name);
      this.price = Number(this.currprd?.price);
      this.quantity = Number(this.currprd?.quantity);
    
  });

}
  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currprdID);
    if(currIndex!=0)
    {
      this.currprdID=this.prdIDsList[currIndex-1];
      this.router.navigate(['/Products', this.currprdID]);
    }
  }
  nextProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currprdID);
    if(currIndex<this.prdIDsList.length-1)
    {
      this.currprdID=this.prdIDsList[currIndex+1];
      this.router.navigate(['/Products', this.currprdID]);
    }

  }
  isFirstItem():boolean
  {
    return this.currprdID==this.prdIDsList[0];
  }
  islastItem():boolean
  {
    return this.currprdID==this.prdIDsList[this.prdIDsList.length-1];
  }
  
}
