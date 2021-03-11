import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { Material } from 'src/libs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GraphQLModule } from './graphql.module';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';
import { BidService } from './services/bid.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, SignInComponent, SignUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    BrowserAnimationsModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GraphQLModule,
  ],
  exports: [Material],
  providers: [AuthService, ProductService, BidService],
  bootstrap: [AppComponent],
})
export class AppModule {}
