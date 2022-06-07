import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPetsComponent } from './editar-pets.component';

describe('EditarPetsComponent', () => {
  let component: EditarPetsComponent;
  let fixture: ComponentFixture<EditarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
