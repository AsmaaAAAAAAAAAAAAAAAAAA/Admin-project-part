import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';



const routes: Routes = [
  {path: '', component:LayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Products', component:ProductsComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:OrderComponent},
    {path:'AboutUs', component:AboutUsComponent},
    {path:'cart', component:CartComponent},
    {path:'ContactUs', component:ContactUsComponent}, 
    {path:'NewProduct/:pid', component:AddProductComponent}
  ]},
{
  path:'User',
  loadChildren:()=>import('src/app/components/user-lazy-load/user-lazy-load.module').then(m=>m.UserLazyLoadModule)
},
  {path:'**', component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
