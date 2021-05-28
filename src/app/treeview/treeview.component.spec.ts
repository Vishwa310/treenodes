import { ComponentFactoryResolver } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
import { IndianPipe } from '../indian.pipe';

import { TreeviewComponent } from './treeview.component';

describe('TreeviewComponent', () => {
  let component: TreeviewComponent;
  let fixture: ComponentFixture<TreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeviewComponent, IndianPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewComponent);
    component = fixture.componentInstance;
    component.items = require('../data.json').values;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default state is all are collapsed', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const root = fixture.debugElement.queryAll(By.css('.expanded'));
    expect(root.length).toEqual(0);
  });

  it('clicking parent will expand a child', async () => {
    const parent = fixture.debugElement.queryAll(By.css('#india'));
    parent[0].nativeElement.click();
    fixture.detectChanges();
    const child = fixture.debugElement.queryAll(By.css('#north'));
    fixture.whenStable().then(() => {
      expect(child.length).toBeGreaterThan(0);
    })
  });

  it('unit tests for expand and collapse functionality', async () => {
    const expall = fixture.debugElement.queryAll(By.css('#expall'));
    expall[0].nativeElement.click();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.collapsed')).length).toEqual(0);

    const collapall = fixture.debugElement.queryAll(By.css('#collapall'));
    collapall[0].nativeElement.click();
    fixture.detectChanges();
    expect(component.expanded.size).toEqual(0);
  });

  it('details panel should contain population in human readable format(crores", "lakhs" etc)', async () => {
    const expall = fixture.debugElement.queryAll(By.css('#expall'));
    expall[0].nativeElement.click();
    fixture.detectChanges();
    const collapall = fixture.debugElement.queryAll(By.css('#details'));
    expect(collapall[0].nativeElement.innerHTML).toContain('Lakhs' || 'Crores');
   });

});