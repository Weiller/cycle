import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGeralEstudoComponent } from './cadastro-geral-estudo.component';

describe('CadastroGeralEstudoComponent', () => {
  let component: CadastroGeralEstudoComponent;
  let fixture: ComponentFixture<CadastroGeralEstudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGeralEstudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGeralEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
