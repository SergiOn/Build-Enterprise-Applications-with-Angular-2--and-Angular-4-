import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor() {
        const b = _.isBoolean(true);
        console.log(b);
    }
}
