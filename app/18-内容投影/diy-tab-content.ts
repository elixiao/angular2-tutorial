import {Component} from '@angular/core';

@Component({
    selector: 'diy-tab-content',
    template: `
    <div class="diy-tab-content" [hidden]="!isActive">
        <ng-content select="diy-tab-content"></ng-content>
    </div>
`,
    styles:[`
        .diy-tab-nav {
            color:greenyellow;
        }
    `]
})

export class DiyTabContentComponent {
    isActive:boolean = false
}