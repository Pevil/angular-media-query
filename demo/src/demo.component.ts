import { Component } from '@angular/core';

@Component({
    selector: 'demo-component',
    template: `
        <div class="box" *ifMediaQuery="'(min-width: 500px)'">This only shows if screen width is atleast 500px</div>
    `,
    styles: [`
        .box {
            height: 350px;
            width: 350px;
            background-color: yellow;
        }
    `]
})
export class DemoComponent {}