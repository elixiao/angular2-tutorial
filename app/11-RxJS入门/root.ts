import {Component} from '@angular/core'
import {SearchService} from './search.service'

@Component({
    selector:'root',
    template:`
<div>
    <input placeholder="请输入姓名" [(ngModel)]="name" (keyup)="name.trim()&&search()" />
    <div *ngIf="users.length">
        <ul class="hint">
            <li *ngFor="let user of users">
                {{user.name}}
            </li>
        </ul>
    </div>
</div>
`,
    styles:[`
    .hint{
        list-style: none;
        padding-left: 0;
        font-size: 11px;
    }
`],
    providers:[SearchService]
})

export class RootComponent {
    name = ''
    users = []
    timer
    currentSearch = ''
    constructor(private searchService:SearchService) {}

    // 普通的search
    // search() {
    //     this.searchService.getNames(this.name.trim())
    //         .then((response)=>{
    //             console.log(response.data)
    //             this.users = response.data
    //         })
    // }

    // 优化1——减少多余请求次数
    // search() {
    //     clearTimeout(this.timer)
    //     this.timer = setTimeout(()=>{
    //         this.searchService.getNames(this.name.trim())
    //             .then((response)=>{
    //                 console.log(response.data)
    //                 this.users = response.data
    //             })
    //     },250)
    // }

    // 优化2——返回的数据是否一致
    // search() {
    //     clearTimeout(this.timer)
    //     this.currentSearch = this.name
    //     this.timer = setTimeout(()=>{
    //         this.searchService.getNames(this.name.trim())
    //             .then((res)=>(res.q===this.currentSearch)&&(this.users = res.data))
    //     },250)
    // }

}