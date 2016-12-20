import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'diy-tab-title',
    template: `
    <div class="diy-tab-title" (click)="handleClick()">
        <ng-content></ng-content>
    </div>
`,
    styles:[`
        .diy-tab-title {
            color:greenyellow;
        }
    `]
})

export class DiyTabTitleComponent {
    tabSelected:EventEmitter<DiyTabTitleComponent> = new EventEmitter<DiyTabTitleComponent>()
    handleClick() {
        this.tabSelected.emit(this)
    }
}