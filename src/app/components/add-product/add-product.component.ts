import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { ActivatedRoute, Router,Event } from '@angular/router';
import { ApiproductsService } from 'src/app/services/apiproducts.service';
import { ApiCategoriesService } from 'src/app/services/api-categories.service';
import { IProduct } from 'src/app/ViewModels/IProduct';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newPrd: IProduct={} as IProduct;
  ProUpdateId:number=0
  catList: ICategory[]=[];
  response:{dbpath:''}|undefined
  
 
  constructor(private ApiPrdService: ApiproductsService
    , private router: Router
    ,private CatService:ApiCategoriesService,
    private activatedRoute:ActivatedRoute ) 
    { 
     
      this.CatService.getAllCategory().subscribe(CatLst=>{
        this.catList=CatLst;
      
      })

    }
  ngOnInit(): void {
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.ApiPrdService.getProductByID(this.ProUpdateId).subscribe(prd=>{
        this.newPrd=prd;
      });
    }    
  }
  saveProduct()
  {
   
    console.log("test")
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.ApiPrdService.updatePro(this.newPrd,+this.ProUpdateId).subscribe(prd=>{
        this.router.navigate(['/Order']);
      });
      console.log("test")
      
    }
    else
    {
      this.ApiPrdService.AddnewProduct(this.newPrd).subscribe(prd=>{
        this.router.navigate(['/Order']);
      });
    }
  }
  

  uploadFinished(event:any)
  {
    
    this.response= event.dbPath;
    console.log("response  "+this.response);   
    if(this.response)
    {
      this.newPrd.img= this.response.toString() ;
    
    }
    
  }
}
