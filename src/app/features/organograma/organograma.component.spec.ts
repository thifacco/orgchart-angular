import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramaComponent } from './organograma.component';

describe('OrganogramaComponent', () => {
  let component: OrganogramaComponent;
  let fixture: ComponentFixture<OrganogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganogramaComponent]
    });
    fixture = TestBed.createComponent(OrganogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
