import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitedwarfComponent } from './whitedwarf.component';

describe('WhitedwarfComponent', () => {
  let component: WhitedwarfComponent;
  let fixture: ComponentFixture<WhitedwarfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitedwarfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitedwarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
