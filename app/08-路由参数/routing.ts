import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import {AppleComponent} from './apple'
import {BananaComponent} from './banana'
import {FruitDetailComponent} from './fruit-detail'

const routes:Routes = [
    {
        path:'',
        redirectTo:'/apple',
        pathMatch:'full'
    },
    {
        path:'apple',
        component:AppleComponent
    },
    {
        path:'detail/:id',
        component:FruitDetailComponent
    },
    {
        path:'banana',
        component:BananaComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppleBananaRoutingModule {}