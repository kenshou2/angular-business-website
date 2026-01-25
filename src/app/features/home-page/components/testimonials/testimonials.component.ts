import { Component, HostListener, OnInit } from '@angular/core';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialData } from './models/testimonial-card.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, NgStyle],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  testimonialsData: TestimonialData[] = [
      {
        id: 1,
        reviewerName: 'James W.',
        rating: 5,
        reviewerPfp: 'images/testimonial-pfp2.png',
        testimonialText: '"Your Shadow Side" helped me understand myself and accept my weaknesses. I used to feel an internal conflict, as if something was holding me back. Through a deep analysis of my shadow side, I found answers to questions that had troubled me for years. Now I feel more harmony, confidence, and peace in my life. I highly recommend it to anyone who wants to explore themselves and change their life for the better!',
      },
      {
        id: 2,
        reviewerName: 'Emily R.',
        rating: 4,
        reviewerPfp: 'images/testimonial-pfp1.jpg',
        testimonialText: 'An incredible experience! I learned to understand my inner conflicts and use them for personal growth. Before this, I didn’t realize how many of my decisions were driven by subconscious fears and insecurities. "Your Shadow Side" opened my eyes to who I truly am and gave me the tools to work on myself. Afterward, I feel freer and more energized. Thank you for such a powerful insight!',
      },
      {
        id: 3,
        reviewerName: 'Daniel S.',
        rating: 5,
        reviewerPfp: 'images/testimonial-pfp7.png',
        testimonialText: 'Interesting idea and professional approach. The method allows you to look deeper at yourself, understand your true motives, and improve your life. I had long felt that something was holding me back, but I couldn’t figure out what. Thanks to analyzing my shadow aspects, I recognized the fears and beliefs that had been controlling me. This gave me the strength to make more conscious decisions and shape my future without inner conflicts. Thanks to the team for their work!',
      },
      {
        id: 4,
        reviewerName: 'Olivia M.',
        rating: 5,
        reviewerPfp: 'images/testimonial-pfp3.png',
        testimonialText: 'This program was a true revelation for me! I used to doubt my actions and couldn’t understand why I made certain choices. Thanks to "Your Shadow Side", I was able to explore myself more deeply, accept my fears, and even use them as a source of strength for change. I learned not to push away my weaknesses but to transform them into new opportunities. This is not just a psychological practice—it’s a real journey into yourself!',
      },
      {
        id: 5,
        reviewerName: 'Michael T.',
        rating: 5,
        reviewerPfp: 'images/testimonial-pfp6.png',
        testimonialText: 'I’m impressed by the quality of the materials and the team’s approach! They help uncover the hidden causes of inner conflicts and provide practical recommendations to overcome them. After completing the program, I became more confident, started making more thoughtful decisions, and began to see my weaknesses as part of myself rather than something to hide. I’m glad I discovered this program!',
      },
      {
        id: 6,
        reviewerName: 'Sophia L.',
        rating: 4,
        reviewerPfp: 'images/testimonial-pfp4.png',
        testimonialText: 'A very deep and helpful program! I had been searching for something like this to better understand myself and my inner experiences. The information is presented clearly, the methodology works, and results are noticeable within just a few weeks. The only thing I wish for is even more personalized recommendations, but even so, this is one of the best self-development programs I’ve tried!',
      },
      {
        id: 7,
        reviewerName: 'John P.',
        rating: 4,
        reviewerPfp: 'images/testimonial-pfp5.png',
        testimonialText: 'I never thought that my inner conflict could be connected to not accepting my shadow side. After working with this method, my attitude toward myself changed—I became calmer, less self-critical, and more aware. I really appreciated that there are no superficial tips here—just a deep, meaningful self-analysis. It has changed the way I view many aspects of my life!',
      },
  ];
  screenWidth!: number;
  leftShift = 0;
  itemsToLeft!: number;
  itemsToRight!: number;
  showControls = false;
  testimonialsLength = this.testimonialsData.length;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.organizeItems(this.screenWidth);
  }

  @HostListener('window:resize')
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.organizeItems(this.screenWidth);
  }

  organizeItems(screenWidth: number) {
    this.showControls = false;
    if (screenWidth <= 992) {    
      if (this.testimonialsLength > 1) {
        this.showControls = true;
        this.leftShift = -100 * Math.floor(this.testimonialsLength / 3);
        this.itemsToLeft = Math.floor(this.testimonialsLength / 3);
        this.itemsToRight = this.testimonialsLength - this.itemsToLeft - 1;
      }
    }
    else if (screenWidth <= 1280) { 
      if (this.testimonialsLength > 2) {
        this.showControls = true;
        this.leftShift = -100 * Math.floor(this.testimonialsLength / 3);      
        this.itemsToLeft = Math.floor(this.testimonialsLength / 3);
        this.itemsToRight = this.testimonialsLength - this.itemsToLeft - 2;
      }
    }
    else {
      if (this.testimonialsLength > 3) {
        this.showControls = true;
        this.leftShift = -100 * Math.floor(this.testimonialsLength / 3);
        this.itemsToLeft = Math.floor(this.testimonialsLength / 3);
        this.itemsToRight = this.testimonialsLength - this.itemsToLeft - 3;
      }
    }
  }

  moveLeft() {
    if (this.itemsToLeft > 0) {
      this.leftShift += 100;
      this.itemsToLeft -= 1;
      this.itemsToRight += 1;
    }
  }

  moveRight() {
    if (this.itemsToRight > 0) {
      this.leftShift -= 100;
      this.itemsToLeft += 1;
      this.itemsToRight -= 1;
    }
  }
}
