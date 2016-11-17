import {Component,Input} from '@angular/core'

@Component({
    selector:'welcome',
    template:`<h2>{{greet}}</h2>`
})

export class WelcomeComponent {
    @Input()
    greet:String
}
