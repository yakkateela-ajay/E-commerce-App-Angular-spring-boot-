import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserinterafceComponent } from './userinterafce/userinterafce.component';
import { FilterPipe } from './user-pipes/filter.pipe';
import { RealmephonefilterPipe } from './user-pipes/realmephonefilter.pipe';
import { NarzoPhoneFilterPipe } from './user-pipes/narzo-phone-filter.pipe';
import { RealmeTvPipe } from './user-pipes/realme-tv.pipe';
import { AudioFilterPipe } from './user-pipes/audio-filter.pipe';
import { SearchFilterPipe } from './user-pipes/search-filter.pipe';
import { SortPipe } from './user-pipes/sort.pipe';
import { RealmePhonesComponent } from './user-interface-view/realme-phones/realme-phones.component';
import { NarzoPhonesComponent } from './user-interface-view/narzo-phones/narzo-phones.component';
import { RealmeTvComponent } from './user-interface-view/realme-tv/realme-tv.component';
import { AudioComponent } from './user-interface-view/audio/audio.component';
import { AccessoriesComponent } from './user-interface-view/accessories/accessories.component';
import { ViewProductComponent } from './user-interface-view/view-product/view-product.component';
import { CartComponent } from './user-interface-view/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminloginComponent,
    NavbarComponent,
    UserinterafceComponent,
    FilterPipe,
    RealmephonefilterPipe,
    NarzoPhoneFilterPipe,
    RealmeTvPipe,
    AudioFilterPipe,
    SearchFilterPipe,
    SortPipe,
    RealmePhonesComponent,
    NarzoPhonesComponent,
    RealmeTvComponent,
    AudioComponent,
    AccessoriesComponent,
    ViewProductComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [LoginComponent, AdminloginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
