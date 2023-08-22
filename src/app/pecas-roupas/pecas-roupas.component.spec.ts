import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasRoupasComponent } from './pecas-roupas.component';

describe('PecasRoupasComponent', () => {
  let component: PecasRoupasComponent;
  let fixture: ComponentFixture<PecasRoupasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasRoupasComponent]
    });
    fixture = TestBed.createComponent(PecasRoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
