import {Component} from '@angular/core'

@Component({
    selector:'father5',
    template:`
<h3>Countdown to Liftoff (via local variable)</h3>
<button (click)="timer.start()">Start</button>
<button (click)="timer.stop()">Stop</button>
<div class="seconds">{{timer.seconds}}</div>
<child5 #timer></child5>
`,
    styles:[``]
})

export class Father5Component {
}

/*

父组件不能通过数据绑定使用子组件的方法，也不能访问子组件的属性

把本地变量放到子组件标签中代表子组件就可以让父组件得到子组件的引用，从而访问子组件的所有属性和方法。


 */