import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {RedComponent} from './red'
import {BlueComponent} from './blue'
import {NullComponent} from './null'

const routes: Routes = [
    {
        path: '',
        component: NullComponent
    },
    {
        path: 'red',
        component: RedComponent
    },
    {
        path: 'blue',
        component: BlueComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RedBlueRoutingModule {
}