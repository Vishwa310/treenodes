import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IndianPipe } from './indian.pipe';
import { TreeviewComponent } from './treeview/treeview.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TreeviewComponent,
        IndianPipe       
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'treeview'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('treeview');
  });

});
