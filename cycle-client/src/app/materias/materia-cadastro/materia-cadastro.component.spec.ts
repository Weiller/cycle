import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCadastroComponent } from './materia-cadastro.component';

describe('MateriaCadastroComponent', () => {
  let component: MateriaCadastroComponent;
  let fixture: ComponentFixture<MateriaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
