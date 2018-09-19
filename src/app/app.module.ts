import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component'

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'product/:name', component: ProductComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
