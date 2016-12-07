import {Component} from '@angular/core'
import {BrotherService} from './brother.service'

@Component({
    selector:'brother2',
    template:`
<div>
    brother2:
    <input placeholder="name" [(ngModel)]="name"/>
    {{name}}
</div>

<div>
    brother2 user.name:
    <input placeholder="name" [(ngModel)]="user.name"/>
    {{user.name}}
</div>
`,
    providers:[BrotherService]
})

export class Brother2Component {
    name = 'brother2'
    user
    constructor(private brotherService:BrotherService){
        this.name = brotherService.name
        this.user = brotherService.user
    }
}