import { provideRouter, RouterConfig }  from '@angular/router';

import { BaseComponent }  from './components/base/base.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { SigninComponent }  from './components/signin/signin.component';
import { LocationComponent }  from './components/location/location.component';


const routes: RouterConfig=
    [
        {path:"",redirectTo:"/signin",pathMatch:'full'}, 
        {path:"signin",component:SigninComponent},
        {path:"admin",component:BaseComponent,
            children:[
                     { path: '', component: BaseComponent},
                    { path: 'dashboard', component: DashboardComponent},
                    { path: 'location', component: LocationComponent}
                ]
         }

    ];


export const appRouterProviders = [
  provideRouter(routes)
];