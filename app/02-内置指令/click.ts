import {Component} from '@angular/core';

@Component({
    selector: 'click',
    template:`

<h2>click</h2>
<div class="content">
    <Button (click)="handle()">点我</Button>
</div>

<textarea disabled rows="1">
<Button (click)="handle()">点我</Button>
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
    `]
})

export class clickComponent {
    handle():void {
        console.log('点击了！');
    }
}