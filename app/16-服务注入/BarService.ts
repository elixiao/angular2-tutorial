import {Injectable} from '@angular/core'

// @Injectable()
export class BarService {
    age = 12
    constructor(){
    }

    getAge():number {
        return this.age
    }
}