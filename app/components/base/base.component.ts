import {Component,OnInit} from '@angular/core';
import { provideRouter, RouterConfig,ROUTER_DIRECTIVES,Router }  from '@angular/router';
import {GoogleplaceDirective} from './../../../directives/googleplace.directive';
import {NavComponent} from '../nav/nav.component';

@Component({
    selector: 'app-base',
     templateUrl:"../app/components/base/base.html",
    // template:`
    //     <app-nav></app-nav>
    //     <router-outlet></router-outlet>
        
    // `   ,
    directives:[ROUTER_DIRECTIVES,NavComponent],
    precompile:[]
    
})



export class BaseComponent implements OnInit{
        
        constructor(private _router:Router){}

        ngOnInit():any{
            
            this._router.navigate(["admin/dashboard"]);
        }
}

