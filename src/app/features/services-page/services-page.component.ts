import { Component } from '@angular/core';
import { Service } from './models/service';

@Component({
  selector: 'app-services-page',
  imports: [],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  services: Service[] = [
    {
      name: "Consultation",
      price: 10,
      description: "In today’s world, people face numerous challenges that disrupt their balance. Every day brings new questions related to both work and personal relationships. Yet finding answers is becoming increasingly difficult. In modern psychology, there are many approaches, one of which is working with the shadow aspects of the Self. You will understand why this method is so effective in resolving many issues after a consultation with our psychologist.",
    },
    {
      name: "Individual Session",
      price: 15,
      description: "We all experience personal crises when it feels like our world is falling apart. In reality, it is our sense of Self and confidence in our ability to control things that is shaken. Individual work with a psychologist helps you navigate complex life situations and uncover the underlying causes.",
    },
    {
      name: "Group Sessions",
      price: 12,
      description: "Each of us is a unique individual with our own understanding of what is right or wrong. Everyone experiences fear, joy, or any other emotion in their own way—and each has their own reasons for these reactions. Group work provides an opportunity to see and understand your problems “from the outside” and to understand how others perceive you.",
    },
  ]
}
