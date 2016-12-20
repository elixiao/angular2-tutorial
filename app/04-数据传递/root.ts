import {Component} from '@angular/core'
@Component({
    selector: 'root',
    template: `
    <welcome [greet]="data" [name]="data"></welcome>
    <button (click)="change()">点我</button>
`
})

export class RootComponent {
    data = 'hello,my dear!'

    change() {
        this.data = 'good good study'
    }
}