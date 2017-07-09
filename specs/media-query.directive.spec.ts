import { CommonModule } from '@angular/common';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgMediaQueryModule, MediaQueryDirective } from '../index';

@Component({
    selector: 'test',
    template: `
    <ng-template ifMediaQuery [ifMediaQuery]="queryA" #a="ifMediaQuery">
        <div class="box-a"></div>
    </ng-template>

    <ng-template ifMediaQuery [ifMediaQuery]="queryB" #b="ifMediaQuery">
        <div class="box-b"></div>
    </ng-template>
    `,
    styles: [`
        .box-a {
            height: 15px;
            width: 15px;
            background-color: yellow;
        }

        .box-b {
            height: 20px;
            width: 20px;
            background-color: pink;
        }
    `]
})
class TestComponent {
    @ViewChild('a') a;
    @ViewChild('b') b;
    queryA: string;
    queryB: string;
}

describe('MediaQueryDirective', () => {
    let comp: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let isMobile;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [TestComponent, MediaQueryDirective]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        isMobile = window.innerWidth < 500;
        comp.queryA = '(min-width: 500px)';
        comp.queryB = '(max-width: 499px)';
    });

    describe('onInit', () => {
        it('should init', () => {
            fixture.detectChanges();

            let boxA: DebugElement = de.query(By.css('.box-a'));
            let boxB: DebugElement = de.query(By.css('.box-b'));

            expect(boxA === null).toBe(isMobile);
            expect(boxB === null).toBe(!isMobile);
        });
    });

    describe('on view size change', () => {
        it('should trigger a change with a query match', () => {
            fixture.detectChanges();

            comp.a.handleMediaQuery({matches: true});
            comp.b.handleMediaQuery({matches: true});

            fixture.detectChanges();

            expect(de.query(By.css('.box-a'))).toBeDefined();
            expect(de.query(By.css('.box-b'))).toBeDefined();
        });

        it('should trigger a change when query unmatches', () => {
            fixture.detectChanges();

            comp.a.handleMediaQuery({matches: false});
            comp.b.handleMediaQuery({matches: false});

            fixture.detectChanges();

            expect(de.query(By.css('.box-a'))).toBeNull();
            expect(de.query(By.css('.box-b'))).toBeNull();
        });
    });


    describe('on query input change', () => {
        it('should trigger a change if the query being matched against changes', () => {
            fixture.detectChanges();

            expect(de.query(By.css('.box-a')) === null).toBe(isMobile);
            comp.queryA = '(min-width: 5px)';
            fixture.detectChanges();

            expect(de.query(By.css('.box-a'))).toBeDefined();

        });
    });

});