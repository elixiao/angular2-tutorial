import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'


const observer = Observable.interval(1000)
    .map(x=>'source:'+x)

observer.subscribe(x=>console.log(x))
