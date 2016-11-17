import {Component} from '@angular/core';

@Component({
    selector: 'ngIf',
    template: `

<h2>ngIf</h2>
<div class="content">
    <div *ngIf="flag">显示</div>
    <div *ngIf="!flag">不显示</div>
</div>

<textarea disabled rows="2">
<div *ngIf="flag">显示</div>
<div *ngIf="!flag">不显示</div>
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

export class ngIfComponent {
    flag = true
}
