import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/take'


const observer = Observable.of('hello')
    .merge(Observable.of('world'))

observer.subscribe(x=>console.log(x))

const ob2 = Observable.interval(1000)
    .take(5)

ob2.subscribe(x=>console.log(x))