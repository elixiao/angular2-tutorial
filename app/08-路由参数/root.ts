import {Component} from '@angular/core'

@Component({
    selector:'root',
    template:`
<h2>{{title}}</h2>
<a routerLink="/apple">apple</a>
<a routerLink="/banana">banana</a>
<div>
    <router-outlet></router-outlet>
</div>
`,
    styles:[`
    .outlet {
        margin-top:10px;
        border:1px solid blue;
        width: 300px;
        height:200px
    }
`]
})

export class RootComponent {
    title = '页面路由'
}