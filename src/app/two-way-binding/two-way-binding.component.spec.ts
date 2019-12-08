import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBidningComponent } from './two-way-bidning.component';

describe('TwoWayBidningComponent', () => {
  let component: TwoWayBidningComponent;
  let fixture: ComponentFixture<TwoWayBidningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBidningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBidningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
