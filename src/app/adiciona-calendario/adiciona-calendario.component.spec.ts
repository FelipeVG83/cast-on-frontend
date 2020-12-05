import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionaArtistaComponent } from './adiciona-artista.component';


describe('AdicionaArtistaComponent', () => {
  let component: AdicionaArtistaComponent;
  let fixture: ComponentFixture<AdicionaArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
