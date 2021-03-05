import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SignIpComponent } from '../components/sign-ip/sign-ip.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ProductComponent } from '../components/product/product.component';
import { BidComponent } from '../components/bid/bid.component';
import { YourItemComponent } from '../components/your-item/your-item.component';
import { PaletteComponent } from '../components/palette/palette.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { DrawComponent } from '../components/draw/draw.component';
import { ButtonComponent } from '../components/button/button.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    ProfileComponent,
    SignIpComponent,
    SignInComponent,
    ProductComponent,
    BidComponent,
    YourItemComponent,
    PaletteComponent,
    ProductListComponent,
    UserListComponent,
    DrawComponent,
    ButtonComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
