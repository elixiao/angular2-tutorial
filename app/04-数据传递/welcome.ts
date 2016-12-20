import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector: 'welcome',
    template: `
<h2>{{greet}}</h2>
<h2>{{_name}}</h2>
<h2>{{zhiyou}}</h2>
`
})

export class WelcomeComponent implements OnInit {
    @Input()
    greet: string
    _name: string = 'empty'

    constructor() {
        console.log(this.greet)
    }

    ngOnInit() {
        console.log(this.greet)
    }

    @Input()
    set name(name: string) {
        console.log('变了！！' + name)
        this._name = (name && name.trim()) || '<no name set>';
    }

    get name() {
        return this._name;
    }

    @Input()
    set zhiyou(name: string) {
        console.log('zhiyou！！' + name)
    }

}
