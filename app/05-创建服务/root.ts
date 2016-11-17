import {Component} from '@angular/core'
import {User} from './user'
import {UserService} from './user.service'

@Component({
    selector:'root',
    template:`

<ul>
    <li *ngFor="let user of users">
        姓名：{{user.name}}，年龄：{{user.age}}
    </li>
</ul>
`,
    providers:[UserService]
})

export class RootComponent {
    users:User[]
    constructor(private userService:UserService) {
        this.users = userService.getUsers()
    }
}