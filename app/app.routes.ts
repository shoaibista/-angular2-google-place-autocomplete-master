import { provideRouter, RouterConfig }  from '@angular/router';

import { BaseComponent }  from './components/base/base.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';


const routes: RouterConfig=
    [
        {path:"",redirectTo:"/admin",pathMatch:'full'}, 
        
        {path:"admin",component:BaseComponent,
            // children:[
            //         { path: '', component: BaseComponent},
            //         { path: 'dashboard', component: DashboardComponent},
            //     ]
         }

    ];


export const appRouterProviders = [
  provideRouter(routes)
];