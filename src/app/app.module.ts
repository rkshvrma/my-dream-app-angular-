import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserData} from './mycomp/shared/userdata.service'
import {DeptData} from './mycomp/shared/deptdata.service'
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { FavoriteComponentComponent } from './favorite-component/favorite-component.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { FormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import {Summary } from './shared/summary.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { RouterModule } from '@angular/router';
import {AppRouting} from './app.routing';
import {ChildRouting} from './child.routing';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    FavoriteComponentComponent,
    HeadercompComponent,
    FootercompComponent,
    LikeComponent,
    PipedemoComponent,
    Summary,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingpageComponent 
  ],
  imports: [
    BrowserModule, FormsModule, AppRouting, ChildRouting
  ],
  providers: [UserData, DeptData],
  bootstrap: [LandingpageComponent ]
})
export class AppModule { }
