import {Component} from '@angular/core'

@Component({
    selector:'father2',
    template:`
<h2>Master controls {{names.length}} names</h2>
<child2 *ngFor="let name of names" [name]="name"></child2>
`,
    styles:[``]
})

export class Father2Component {
    names = ['Tom','','David']
}