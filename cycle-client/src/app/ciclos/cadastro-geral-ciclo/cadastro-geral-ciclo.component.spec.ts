import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGeralCicloComponent } from './cadastro-geral-ciclo.component';

describe('CadastroGeralCicloComponent', () => {
  let component: CadastroGeralCicloComponent;
  let fixture: ComponentFixture<CadastroGeralCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGeralCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGeralCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
