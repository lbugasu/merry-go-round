import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Material } from 'src/libs';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductComponent } from '../components/product/product.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { YourItemComponent } from '../components/your-item/your-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    ProductComponent,
    ProductListComponent,
    YourItemComponent,
    UserListComponent,
  ],
  imports: [CommonModule, Material],
  exports: [Material],
})
export class PagesModule {}
