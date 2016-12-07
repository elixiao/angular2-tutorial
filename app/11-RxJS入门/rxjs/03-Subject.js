import {Subject} from 'rxjs/Subject'

var subject = new Subject()

subject.subscribe({
    next: (v)=>console.log('observerA: ' + v)
})

subject.subscribe(v=>console.log('observerB: ' + v))

subject.next(1)
subject.next(2)
subject.next(3)

setTimeout(()=>{
    subject.next(4)
},2000)