import {Component,OnInit} from '@angular/core';

import { provideRouter, RouterConfig,ROUTER_DIRECTIVES,Router }  from '@angular/router';
import {GoogleplaceDirective} from './../../../directives/googleplace.directive';



@Component({
    selector: 'location',
    templateUrl: "../app/components/location/location.html",
    directives:[ROUTER_DIRECTIVES,GoogleplaceDirective]
})



export class LocationComponent implements OnInit{
        
        constructor(private _router:Router){}

        ngOnInit():any{
            
            // this._router.navigate(["dashboard/business"]);
        }

        public address : Object;
       getAddress(place:Object) {       
           this.address = place['formatted_address'];
           var location = place['geometry']['location'];
           var lat =  location.lat();
           var lng = location.lng();
           console.log("Address Object", place);
       }
}

