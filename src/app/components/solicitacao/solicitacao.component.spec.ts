import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoComponent } from './solicitacao.component';

describe('SolicitacaoComponent', () => {
  let component: SolicitacaoComponent;
  let fixture: ComponentFixture<SolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
