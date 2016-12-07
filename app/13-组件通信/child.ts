import {Component,Input} from '@angular/core'

@Component({
    selector:'child',
    template:`姓名：{{name}}，性别：{{gender}}`,
    styles:[``]
})

export class ChildComponent {
    @Input() name:string
    @Input('sex') gender:string
}