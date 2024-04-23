import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositorycardComponent } from './repositorycard.component';

describe('RepositorycardComponent', () => {
  let component: RepositorycardComponent;
  let fixture: ComponentFixture<RepositorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositorycardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have an ngOnInit method', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('should have a repositoryOpen method', () => {
    expect(component.repositoryOpen).toBeDefined();
  });

});
