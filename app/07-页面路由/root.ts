import {Component} from '@angular/core'

@Component({
    selector:'root',
    template:`
<h2>{{title}}</h2>
<a routerLink="/red">red</a>
<a routerLink="/blue">blue</a>
<div class="outlet">
    <router-outlet></router-outlet>
</div>

`,
    styles:[`
    .outlet {
        margin-top:10px;
        border:1px solid #ccc;
        width: 300px;
        height:200px
    }
`]
})

export class RootComponent {
    title = '页面路由'

}