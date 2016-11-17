import {Component} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router'
import {Location} from '@angular/common'
import {FruitService} from './fruit.service'

@Component({
    selector:'fruit-detail',
    template:`
<div *ngIf="fruit.name!=='金帅'">
    <h2>名称{{fruit.name}}</h2>
    <h2>价格{{fruit.price}}</h2>
    <button (click)="goBack()">返回</button>
</div>
<div *ngIf="fruit.name==='金帅'">
    <h2>名称{{fruit.name}}</h2>
    <h2>价格{{fruit.price}}</h2>
    <button (click)="goBack()">返回</button>
    <banana></banana>
</div>
`,
    providers:[FruitService]
})

export class FruitDetailComponent {
    fruit;
    constructor(
        private route:ActivatedRoute,
        private location:Location,
        private fruitService:FruitService
    ){
        this.route.params.forEach((params:Params)=>{
            let p = params['id']
            let arr = p.split('-')
            let type = arr[0]
            let id = + arr[1]
            type==='a'?this.fruit = this.fruitService.getApple(id):this.fruit = this.fruitService.getBanana(id)
        })
    }

    goBack(): void {
        this.location.back();
    }

}