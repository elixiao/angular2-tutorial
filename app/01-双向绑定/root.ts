import {Component} from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <label>姓名：</label>
        <input [(ngModel)]="name" placeholder="name" />
        <h2>你好，{{name}}！</h2>
    `
})

export class RootComponent {
    name = 'David'
}