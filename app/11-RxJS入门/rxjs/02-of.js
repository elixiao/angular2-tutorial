import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const ob1 = Observable.of(1, 2, 3, 4, 5)
const sub1 = ob1.subscribe(val=>console.log(val))


const ob2 = Observable.of(
    {
        name: 'David',
        age: 28
    },
    [1, 2, 3],
    (hello)=> {
        console.log(hello)
    }
)
const sub2 = ob2.subscribe(val=>console.log(val))