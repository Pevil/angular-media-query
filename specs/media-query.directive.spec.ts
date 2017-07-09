import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'test',
    template: `
    
    `
})
class TestComponent {}

describe('MediaQueryDirective', () => {
    let comp: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [TestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });

    it('should do something', () => {
        console.log('testing');
        console.log(window.innerWidth);
        console.log(window.outerWidth);

        expect(1).toBe(1);
    })

});