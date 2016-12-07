import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'


var observer = Observable.throw('this is error')
const sub1 = observer.subscribe(
    val=>console.log(val),
    error=>console.log(error),
    complete=>console.log('completed!')
)


const sub2 = observer.subscribe(
    {
        next: val=>console.log(val),
        error: error=>console.log(error),
        complete: ()=>console.log('completed!')
    }
)
