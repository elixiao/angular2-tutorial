import {Component} from '@angular/core';

@Component({
    selector: 'class',
    template: `

<h2>class</h2>
<div class="content">
    <div [class.colorRed]="color==='red'">文字颜色——红色</div>
    <div [class.colorBlue]="color==='blue'">文字颜色——蓝色</div>
</div>

<textarea disabled rows="2">
<div [class.colorRed]="color==='red'">文字颜色——红色</div>
<div [class.colorBlue]="color==='blue'">文字颜色——蓝色</div>
</textarea>
`,
    styles: [`
        textarea {
            width: 100%;
            border:1px solid #ccc;
            overflow: hidden;
        }
        .content {
            margin: 10px 0;
        }
        .colorRed {
            color:red
        }
        .colorBlue {
            color:blue
        }
    `]
})

export class classComponent {
    color = 'red'
}