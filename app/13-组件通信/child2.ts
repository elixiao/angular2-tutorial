import {Component,Input} from '@angular/core'

@Component({
    selector:'child2',
    template:`<h3>{{name}}</h3>`,
    styles:[``]
})

export class Child2Component {
   _name:string = '<no name set>'
    @Input()
    set name(name:string) {
        this._name = (name&&name.trim()) || '<no name set>'
    }
    get name() {
        return '['+this._name+']'
    }
}
