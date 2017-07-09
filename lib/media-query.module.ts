import { NgModule } from '@angular/core';
import { MediaQueryDirective } from './media-query.directive';


@NgModule({
    declarations: [MediaQueryDirective],
    exports: [MediaQueryDirective]
})
export class NgMediaQueryModule {
}
