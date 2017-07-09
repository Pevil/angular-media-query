import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMediaQueryModule } from '@pevil/media-query';

import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    imports: [BrowserModule, NgMediaQueryModule],
    bootstrap: [DemoComponent]
})
export class DemoModule {}