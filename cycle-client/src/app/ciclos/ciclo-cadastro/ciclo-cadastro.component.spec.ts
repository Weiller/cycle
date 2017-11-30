import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloCadastroComponent } from './ciclo-cadastro.component';

describe('CicloCadastroComponent', () => {
  let component: CicloCadastroComponent;
  let fixture: ComponentFixture<CicloCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
