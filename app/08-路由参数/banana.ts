import {Component} from '@angular/core'
import {FruitService} from './fruit.service'

@Component({
    selector:'banana',
    template:`
<ul>
    <li *ngFor="let banana of bananas">
        <a [routerLink]="['/detail','b-'+banana.id]">
            编号：{{banana.id}}，品种：{{banana.name}}，价格：{{banana.price}}
        </a>
    </li>
</ul>
`,
    providers:[FruitService]
})

export class BananaComponent {
    bananas;
    constructor(private fruitService:FruitService) {
        this.bananas = fruitService.getBananas()
    }
}