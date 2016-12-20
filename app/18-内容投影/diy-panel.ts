import { Component } from '@angular/core';

@Component({
    selector: 'diy-panel',
    template: `
    <div class="panel">
        <div class="panel-title">
            <ng-content select="diy-panel-title"></ng-content>
        </div>
        <div class="panel-content">
            <ng-content select="diy-panel-content"></ng-content>
        </div>
    </div>
`,
    styles:[`
        .panel {
            border:1px solid red
        }
        .panel-title {
            color:greenyellow;
        }
        .panel-content {
            color:cornflowerblue;
        }
    `]
})

export class DiyPanelComponent {

}