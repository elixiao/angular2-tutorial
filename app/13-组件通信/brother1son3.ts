import {Component} from '@angular/core'
import {BrotherService} from './brother.service'

@Component({
    selector:'brother1son3',
    template:`
<div>
    brother1son3:
    <input placeholder="name" [(ngModel)]="name"/>
    {{name}}
</div>

<div>
    brother1son3 user.name:
    <input placeholder="name" [(ngModel)]="user.name"/>
    {{user.name}}
</div>
`,
})

export class Brother1Son3Component {
    name = 'brother1Son3'
    user
    constructor(private brotherService:BrotherService){
        this.name = brotherService.name
        this.user = brotherService.user
    }
}