import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwiperGesturePage } from './swiper-gesture.page';

describe('SwiperGesturePage', () => {
  let component: SwiperGesturePage;
  let fixture: ComponentFixture<SwiperGesturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperGesturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperGesturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
