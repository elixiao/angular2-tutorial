import {Component, ViewChild, ContentChild} from '@angular/core';
import {DiyUserBadgeComponent} from "./diy-user-badge";
import {DiyUserRatingComponent} from "./diy-user-rating";

@Component({
    selector: 'diy-user-panel',
    template: `
    这里是diy-user-panel
    <diy-user-badge></diy-user-badge>
    <!--<ng-content></ng-content>-->
`,
    // directives:[DiyUserBadgeComponent,DiyUserRatingComponent]
})

export class DiyUserPanelComponent {
    @ViewChild(DiyUserBadgeComponent)
    badge: DiyUserBadgeComponent

    @ContentChild(DiyUserRatingComponent)
    rating: DiyUserRatingComponent

    constructor() {
        this.print('constructor')
    }

    ngOnInit() {
        this.print('ngOnInit')
    }

    ngAfterViewInit() {
        this.print('ngAfterViewInit')
    }

    ngAfterContentInit() {
        this.print('ngAfterContentInit')
    }

    print(name) {
        console.log(name)
        console.log('badge',this.badge)
        console.log('rating',this.rating)
    }
}

// viewChild、contentChild