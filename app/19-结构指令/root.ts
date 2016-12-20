import {Component} from '@angular/core';

@Component({
    selector: 'root',
    template: `
<div *emoji="'你好呀[:smile:]'">
       我是很好
</div>
    `
})

export class RootComponent {
}