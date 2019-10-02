import { RouterModule } from '@angular/router';
 
import {UserdetailsComponent} from './userdetails/userdetails.component';
import {PortfolioComponent} from './portfolio/portfolio.component'

export const AppRouting = RouterModule.forRoot([
 
    {path:'userdetails/:iddd', component:UserdetailsComponent},
    {path:'portfolio', component:PortfolioComponent},
    
    ])