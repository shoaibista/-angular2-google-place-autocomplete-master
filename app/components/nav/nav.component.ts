import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';


@Component({
    selector:"app-nav",
    templateUrl:"../app/components/nav/nav.html",
    directives:[ROUTER_DIRECTIVES],
    
})

export class NavComponent{
    public username:string;
    public brandName:string="Google Map";

    constructor(private _router:Router){}

    

    ngOnInit():any{
    
    }


}