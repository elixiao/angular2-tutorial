import {Injectable} from '@angular/core'
import {FooService} from './FooService'
import {BarService} from './BarService'

@Injectable()
export class BazService {

    constructor(
        private fooService:FooService,
        private barService:BarService,
    ){
    }

    getName():string {
        return 'baz'+this.fooService.getName()
    }

    getAge():number {
        return 100 +this.barService.getAge()
    }

}