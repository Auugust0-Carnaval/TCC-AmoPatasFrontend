import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPetsComponent } from './cadastrar-pets.component';

describe('CadastrarPetsComponent', () => {
  let component: CadastrarPetsComponent;
  let fixture: ComponentFixture<CadastrarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
