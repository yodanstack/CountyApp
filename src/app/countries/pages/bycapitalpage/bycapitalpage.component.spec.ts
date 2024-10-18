import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycapitalpageComponent } from './bycapitalpage.component';

describe('BycapitalpageComponent', () => {
  let component: BycapitalpageComponent;
  let fixture: ComponentFixture<BycapitalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BycapitalpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BycapitalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
