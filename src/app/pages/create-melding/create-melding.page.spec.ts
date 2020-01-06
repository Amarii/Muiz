import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateMeldingPage } from './create-melding.page';

describe('CreateMeldingPage', () => {
  let component: CreateMeldingPage;
  let fixture: ComponentFixture<CreateMeldingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeldingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMeldingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
