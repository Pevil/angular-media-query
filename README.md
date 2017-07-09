# Angular Media Queries

Similar to the *ngIf structural directives, only render dom elements if they match a media query using the *ifMediaQuery directive

## Install

`$ npm install @pevil/media-query`

## Usage

First import the MediaQueryModule,

```
import { MediaQueryModule } from '@pevil/media-query';

@NgModule({
    imports: [MediaQueryModule],
    exports: [MediaQueryModule] //if added to a SharedModule
})
export class SharedModule {}
```

then use it in your html template:

```
<img *ifMediaQuery="'(min-width: 470px)'" [src]="item?.imageUrl"
```





