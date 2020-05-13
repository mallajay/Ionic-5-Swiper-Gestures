import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperGesturePageRoutingModule } from './swiper-gesture-routing.module';

import { SwiperGesturePage } from './swiper-gesture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperGesturePageRoutingModule
  ],
  declarations: [SwiperGesturePage]
})
export class SwiperGesturePageModule {}
