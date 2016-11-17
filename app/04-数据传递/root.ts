import {Component} from '@angular/core'
@Component({
    selector: 'root',
    template: `
    <welcome [greet]="data"></welcome>
`
})

export class RootComponent {
    data = 'hello,my dear!'
}