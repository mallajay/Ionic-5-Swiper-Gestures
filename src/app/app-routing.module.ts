import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "swiper-gesture",
    pathMatch: "full",
  },
  {
    path: "swiper-gesture",
    loadChildren: () =>
      import("./pages/swiper-gesture/swiper-gesture.module").then(
        (m) => m.SwiperGesturePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
