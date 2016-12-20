import {Component} from '@angular/core'
import {UserService} from './user.service'

@Component({
    selector:'root',
    template:`
<ul>
    <ol *ngFor="let user of users">
    {{user.name}}
    <img src="{{user.avatar}}" />
    </ol>
</ul>
`,
    providers:[UserService]
})


export class RootComponent {
    users=[]
    constructor(private userService:UserService){
        userService.getUsers().then((data)=>{
            console.log(data)
            this.users = data
        })
        userService.search()
            .subscribe(data=>{
                console.log(data)
            },error=>{
                console.log(error)
            })
    }
}
