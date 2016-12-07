import {Component} from '@angular/core'
import {BrotherService} from './brother.service'

@Component({
    selector:'brother1',
    template:`
<div>
    brother1:
    <input placeholder="name" [(ngModel)]="name"/>
    {{name}}
</div>

<div>
    brother1 user.name:
    <input placeholder="name" [(ngModel)]="user.name"/>
    {{user.name}}
</div>

<brother1son1></brother1son1>
<brother1son2></brother1son2>
<brother1son3></brother1son3>
`,
    providers:[BrotherService]
})

export class Brother1Component {
    name = 'brother1'
    user
    constructor(private brotherService:BrotherService){
        this.name = brotherService.name
        this.user = brotherService.user
    }
}