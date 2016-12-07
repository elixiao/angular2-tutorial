import {Injectable} from '@angular/core'

@Injectable()
export class FooService {
    name = 'foo'
    constructor(){

    }

    getName():string {
        return this.name
    }
}