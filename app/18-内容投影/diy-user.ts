import {Component} from '@angular/core';
import {DiyUserBadgeComponent} from "./diy-user-badge";

@Component({
    selector: 'diy-user',
    template: `
    这里是diy-user
    <diy-user-panel>
        user-panel内部的了
        <diy-user-rating></diy-user-rating>
    </diy-user-panel>
`,
    // directives:[DiyUserBadgeComponent]
})

export class DiyUserComponent {

}