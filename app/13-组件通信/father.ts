import {Component} from '@angular/core'

@Component({
    selector:'father',
    template:`
<div>
    <ul>
        <li *ngFor="let user of users">
            <child [name]="user.name" [sex]="user.gender"></child>
        </li>
    </ul>
</div>
`,
    styles:[``]
})

export class FatherComponent {
    users = [
        {name:'小明',gender:'男'},
        {name:'小红',gender:'女'},
        {name:'老王',gender:'男'},
        {name:'翠花',gender:'女'}
    ]
}