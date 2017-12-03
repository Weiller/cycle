import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCicloComponent } from './materias-ciclo.component';

describe('MateriasCicloComponent', () => {
  let component: MateriasCicloComponent;
  let fixture: ComponentFixture<MateriasCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
