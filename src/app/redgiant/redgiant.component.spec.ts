import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedgiantComponent } from './redgiant.component';

describe('RedgiantComponent', () => {
  let component: RedgiantComponent;
  let fixture: ComponentFixture<RedgiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedgiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedgiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
