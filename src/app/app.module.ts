import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SideMenuComponent } from './components/SideMenu/SideMenu.component';
import { ProductCardDirective } from './Directives/ProductCard.directive';
import { NationalIDPipe } from './pipes/nationalID.pipe';
import {HttpClientModule} from '@angular/common/http';
import { CreditPipe } from './pipes/credit.pipe';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UploadComponent } from './components/upload/upload.component';
import { CartComponent } from './components/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './AppMaterialModule';



@NgModule({
  declarations: [
    AppComponent,
    ProductCardDirective,
    NationalIDPipe,
    CreditPipe,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    OrderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    LayoutComponent,
    AddProductComponent,
    UploadComponent,
   
    CartComponent,
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppMaterialModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
