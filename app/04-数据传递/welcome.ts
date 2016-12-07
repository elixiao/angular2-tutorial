import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector:'welcome',
    template:`<h2>{{greet}}</h2>`
})

export class WelcomeComponent implements OnInit{
    @Input()
    greet:String

    constructor() {
        console.log(this.greet)
    }

    ngOnInit() {
        console.log(this.greet)
    }

}
