import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Material } from 'src/libs';
import { PaletteComponent } from './palette/palette.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { YourItemComponent } from './your-item/your-item.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    YourItemComponent,
    UserListComponent,
    ProfileComponent,
    PaletteComponent,
  ],
  imports: [CommonModule, Material],
  exports: [
    ProductComponent,
    ProductListComponent,
    YourItemComponent,
    UserListComponent,
    ProfileComponent,
    PaletteComponent,
  ],
})
export class ComponentsModule {}
