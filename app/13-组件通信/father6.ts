import {Component, ViewChild} from '@angular/core'
import {Child6Component} from "./child6";

@Component({
    selector:'father6',
    template:`
<h3>Countdown to Liftoff (via local variable)</h3>
<button (click)="start()">Start</button>
<button (click)="stop()">Stop</button>
<div class="seconds">{{seconds()}}</div>
<child6></child6>
`,
    styles:[``]
})

export class Father6Component {
    @ViewChild(Child6Component)
    private child:Child6Component

    seconds() {return 0}

    ngAfterViewInit() {
        setTimeout(()=>this.seconds=()=>this.child.seconds,0)
    }

    start() {this.child.start()}
    stop() {this.child.stop()}
}
