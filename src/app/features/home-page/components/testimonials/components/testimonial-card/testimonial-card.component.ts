import { Component, input, OnInit } from '@angular/core';
import { TestimonialData } from '../../models/testimonial-card.model';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent implements OnInit {
  testimonialData = input<TestimonialData>();
  nOfStars?: number[];
  
  ngOnInit() {
    this.nOfStars = new Array(this.testimonialData()?.rating);
  }
}
