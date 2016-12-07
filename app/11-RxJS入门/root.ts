import {Component} from '@angular/core'
import {SearchService} from './search.service'

// import {Observable, Subject} from 'rxjs'
// import {Response} from "@angular/http";

@Component({
    selector: 'root',
    template: `
<div>
    <!--<input placeholder="请输入姓名" [(ngModel)]="name" (keyup)="name.trim()&&search1()" />-->
    <!--<input placeholder="请输入姓名" [(ngModel)]="name" (keyup)="name.trim()&&search2()" />-->
    <!--<input placeholder="请输入姓名" [(ngModel)]="name" (keyup)="name.trim()&&search3()" />-->
    <!--<input placeholder="请输入姓名" [(ngModel)]="name" (keyup)="name.trim()&&search4()" />-->
    <!--<input placeholder="请输入姓名" [formControl]="term" />-->
    
    <div *ngIf="users.length">
        <ul class="hint">
            <li *ngFor="let user of users">
                {{user.name}}
            </li>
        </ul>
    </div>
</div>
`,
    styles: [`
    .hint{
        list-style: none;
        padding-left: 0;
        font-size: 11px;
    }
`],
    providers: [SearchService]
})

export class RootComponent {
    name = ''
    term
    users = []
    timer
    currentSearch = ''



    constructor(private searchService: SearchService) {
    }

    // 普通的search
    search1() {
        this.searchService.getNames(this.name.trim())
            .then((response)=> {
                console.log(response.data)
                this.users = response.data
            })
    }

    // 优化1——减少多余请求次数
    search2() {
        clearTimeout(this.timer)
        this.timer = setTimeout(()=> {
            this.searchService.getNames(this.name.trim())
                .then((response)=> {
                    console.log(response.data)
                    this.users = response.data
                })
        }, 250)
    }

    // 优化2——返回的数据是否一致
    search3() {
        clearTimeout(this.timer)
        this.currentSearch = this.name
        this.timer = setTimeout(()=> {
            this.searchService.getNames(this.name.trim())
                .then((res)=>(res.q === this.currentSearch) && (this.users = res.data))
        }, 250)
    }


    // private searchTerms = new Subject<string>()
    // search4(term:string):void {
    //     this.searchTerms.next(term)
    // }
    // 基于RxJS的代码
    // rxjs() {
    //     this.searchTerms
    //         .debounceTime(250) // 延迟250毫秒
    //         .distinctUntilChanged() // Observable有一个distinctUntilChanged的方法，他会判断从消息源过来的新数据跟上次的数据是否一致，只有不一致才会触发订阅的方法。
    //         .switchMap(term=> {term
    //             ? this.searchService.search(term)
    //             :Observable.of([])
    //             .catch(error=>{
    //                 console.log(error)
    //                 return Observable.of([])
    //             })
    //         })
    // }
}