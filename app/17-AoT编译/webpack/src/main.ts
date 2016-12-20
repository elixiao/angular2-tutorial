import { platformBrowser }    from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory'
import { enableProdMode } from '@angular/core'
import { AppModule } from './app/app.module'

// if (process.env.ENV === 'production') {
//     enableProdMode()
// }
// platformBrowserDynamic().bootstrapModule(AppModule)

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
