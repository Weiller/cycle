import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPesquisaComponent } from './materia-pesquisa.component';

describe('MateriaComponent', () => {
  let component: MateriaPesquisaComponent;
  let fixture: ComponentFixture<MateriaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
