import {Component} from '@angular/core'
import {BrotherService} from './brother.service'

@Component({
    selector:'brother1son2',
    template:`
<div>
    brother1son2:
    <input placeholder="name" [(ngModel)]="name"/>
    {{name}}
</div>

<div>
    brother1son2 user.name:
    <input placeholder="name" [(ngModel)]="user.name"/>
    {{user.name}}
</div>
`,
    providers:[BrotherService]
})

export class Brother1Son2Component {
    name = 'brother1Son'
    user
    constructor(private brotherService:BrotherService){
        this.name = brotherService.name
        this.user = brotherService.user
    }
}