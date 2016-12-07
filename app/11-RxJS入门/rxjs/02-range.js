import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/range'

var ob1 = Observable.range(1,10)
const sub1 = ob1.subscribe(val=>console.log(val))
