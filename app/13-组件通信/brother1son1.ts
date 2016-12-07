import {Component} from '@angular/core'
import {BrotherService} from './brother.service'

@Component({
    selector:'brother1son1',
    template:`
<div>
    brother1son1:
    <input placeholder="name" [(ngModel)]="name"/>
    {{name}}
</div>

<div>
    brother1son1 user.name:
    <input placeholder="name" [(ngModel)]="user.name"/>
    {{user.name}}
</div>
`,
})

export class Brother1Son1Component {
    name = 'brother1Son1'
    user
    constructor(private brotherService:BrotherService){
        this.name = brotherService.name
        this.user = brotherService.user
    }
}