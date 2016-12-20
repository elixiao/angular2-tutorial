import { Component } from '@angular/core';
import 'stompjs'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.less']
    styles: [`
    div {
        width:100px;
        height:100px;
        
    }
    div > a {
        color:red;
    }
    div >span {
        color:blue
    }
`]
})
export class AppComponent { }
