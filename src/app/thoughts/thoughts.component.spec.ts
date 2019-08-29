import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsComponent } from './thoughts.component';

describe('ThoughtsComponent', () => {
  let component: ThoughtsComponent;
  let fixture: ComponentFixture<ThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
