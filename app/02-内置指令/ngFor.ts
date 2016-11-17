import {Component} from '@angular/core';

@Component({
    selector: 'ngFor',
    template: `

<h2>ngFor</h2>
<ul>
    <li *ngFor="let fruit of fruits">{{fruit}}</li>
</ul>

<textarea disabled rows="3">
<ul>
    <li *ngFor="let fruit of fruits">{{fruit}}</li>
</ul>
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

export class ngForComponent {
    fruits = [
        'apple',
        'banana',
        'strawberry',
        'peach',
        'cherry',
        'mango'
    ]
}