import {Component} from '@angular/core'
import {FooService} from "./FooService";
import {BarService} from "./BarService";
import {BazService} from "./BazService";

@Component({
    selector:'sub',
    template:`
    姓名是：{{name}}<br/>
    年龄是：{{age}}
`,
    providers:[FooService,BarService,BazService]
})

export class SubComponent {
    name = '默认的姓名'
    age = 0

    constructor(
        private fooService:FooService,
        private barService:BarService,
        private bazService:BazService,
    ){
        this.name = fooService.getName()
        this.age = barService.getAge()

        this.name = bazService.getName()
        this.age = bazService.getAge()
    }
}