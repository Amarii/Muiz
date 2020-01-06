import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MijnmeldingenPage } from './mijnmeldingen.page';

describe('MijnmeldingenPage', () => {
  let component: MijnmeldingenPage;
  let fixture: ComponentFixture<MijnmeldingenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnmeldingenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MijnmeldingenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
