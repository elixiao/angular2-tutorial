import {Component, Output, EventEmitter, ContentChildren, QueryList} from '@angular/core';
import {DiyTabTitleComponent} from "./diy-tab-title";
import {DiyTabContentComponent} from "./diy-tab-content";

@Component({
    selector: 'diy-tabs',
    template: `
    <div class="diy-tabs">
        <div class="diy-tab-nav">
            <ng-content select="diy-tab-title"></ng-content>
        </div>
        <ng-content select="diy-tab-content"></ng-content>
    </div>
`,
    styles: [`
        .diy-tab-nav {
            color:greenyellow;
        }
    `]
})

export class DiyTabsComponent {
    @Output('changed')
    tabChanged: EventEmitter<number> = new EventEmitter<number>()

    @ContentChildren(DiyTabTitleComponent)
    tabTitles: QueryList<DiyTabTitleComponent>

    @ContentChildren(DiyTabContentComponent)
    tabContents: QueryList<DiyTabContentComponent>

    active: number

    select(index: number) {
        let contents: DiyTabContentComponent[] = this.tabContents.toArray()
        contents[this.active].isActive = false
        this.active = index
        contents[this.active].isActive = true
        this.tabChanged.emit(index)
    }

    ngAfterViewInit() {

    }

    ngAfterContentInit() {
        this.tabTitles
            .map(t=>t.tabSelected)
            .forEach((t, i)=> {
                t.subscribe(_=> {
                    this.select(i)
                })
            })
        this.active = 0
        this.select(0)
    }
}

//angular允许使用template标签并作为内容子节点进行传递