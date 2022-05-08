import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { interval } from 'rxjs';



@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {





  constructor( config : NgbCarouselConfig) {



    config.interval = 4000
    config.pauseOnHover = false
    config.keyboard = true
    config.wrap = true
    config.showNavigationArrows = false

   }

  ngOnInit(): void {
  }


}
