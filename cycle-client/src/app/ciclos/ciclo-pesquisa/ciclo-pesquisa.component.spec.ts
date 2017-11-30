import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloPesquisaComponent } from './ciclo-pesquisa.component';

describe('CicloPesquisaComponent', () => {
  let component: CicloPesquisaComponent;
  let fixture: ComponentFixture<CicloPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
