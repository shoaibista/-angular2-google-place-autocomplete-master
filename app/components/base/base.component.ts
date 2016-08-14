import {Component,OnInit} from '@angular/core';
import { provideRouter, RouterConfig,ROUTER_DIRECTIVES,Router }  from '@angular/router';
import {GoogleplaceDirective} from './../../../directives/googleplace.directive';


@Component({
    selector: 'app-base',
    // templateUrl:"../app/components/base/base.html",
    template:`
        <input type="text" [(ngModel)] = "address"  (setAddress) = "getAddress($event)" googleplace/>
    `   ,
    directives:[ROUTER_DIRECTIVES,GoogleplaceDirective],
    precompile:[]
    
})



export class BaseComponent implements OnInit{
        
        constructor(private _router:Router){}

        ngOnInit():any{
            
            //this._router.navigate(["admin/dashboard"]);
        }
}

