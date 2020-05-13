import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from "@angular/core";
import { GestureCtrlService } from "src/app/providers/gestureCtrl-service/gesture-ctrl.service";
import { IonCard } from "@ionic/angular";

@Component({
  selector: "app-swiper-gesture",
  templateUrl: "./swiper-gesture.page.html",
  styleUrls: ["./swiper-gesture.page.scss"],
})
export class SwiperGesturePage implements OnInit, AfterViewInit {
  people = [
    {
      id: "0",
      name: "Ajay",
      img:
        "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      power: 0,
    },
    {
      id: "0",
      name: "Lion",
      img:
        "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      power: 0,
    },
    {
      id: "0",
      name: "Tree",
      img:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      power: 0,
    },
  ];

  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private gestureCtrlService: GestureCtrlService) {}

  ngOnInit() {
    console.log("people", this.people);
  }

  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.gestureCtrlService.useSwiperGesture(cardArray);
  }
}
