import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {FruitService} from './fruit.service'

@Component({
    selector:'apple',
    template:`
<ul>
    <li *ngFor="let apple of apples"  >
        编号：{{apple.id}}，品种：{{apple.name}}，价格：{{apple.price}}
        <button (click)="gotoDetail(apple.id)">查看详情</button>
    </li>
</ul>
`,
    providers:[FruitService]
})

export class AppleComponent {
    apples;
    constructor(
        private fruitService:FruitService,
        private router:Router
    ) {
        this.apples = fruitService.getApples()
    }

    gotoDetail(id) {
        this.router.navigate(['/detail', 'a-'+id]);
    }

}