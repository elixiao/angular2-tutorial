import {Component} from '@angular/core'

@Component({
    selector: 'my-style',
    template: `
<div>
    <a>红色</a>
    <span>蓝色</span>
</div>
`,
    styles: [`
    div {
        width:100px;
        height:100px;
    }
    a {
        color:yellow;
    }
    span {
        color:gray;
    }
`]
})

export class MyStyleComponent {
}