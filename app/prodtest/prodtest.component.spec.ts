import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdtestComponent } from './prodtest.component';

describe('ProdtestComponent', () => {
  let component: ProdtestComponent;
  let fixture: ComponentFixture<ProdtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
