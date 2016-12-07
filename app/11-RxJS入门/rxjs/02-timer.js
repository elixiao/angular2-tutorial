import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'


var ob1 = Observable.timer(1000)
const sub1 = ob1.subscribe(
    val=>console.log('yes'),
    error=>console.log(error),
    complete=>console.log('completed!')
)

var ob2 = Observable.timer(1000,2000)
const sub2 = ob2.subscribe(
    val=>console.log(val),
    error=>console.log(error),
    complete=>console.log('completed!')
)