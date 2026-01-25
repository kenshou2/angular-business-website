import { Component } from '@angular/core';
import { Faq } from './models/faq.model';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqList: Faq[] = [
    {
      question: "What is the “shadow side”?",
      answer: "It includes all the “unilluminated” expressions of the Self—the ego. These aspects influence the decisions we make and our behavior in situations where we react instinctively. If something about another person triggers, irritates, or, on the contrary, deeply fascinates us, this is the result of inner, deep-rooted processes.",
    },
    {
      question: "Why is it important to work through your shadow aspects?",
      answer: "People often believe they are fully in control of their actions, thoughts, and reactions. They are confident that they make decisions consciously. Yet at the same time, they often cannot find the reasons for their failures or certain events in their lives. The answers lie precisely in the “shadow aspects” of the personality.",
    },
    {
      question: "What does transforming these hidden aspects of the Self provide?",
      answer: "Most people live their lives as if in a dream, following lifestyles shaped by social norms or other internalized “beliefs.” With each passing day, they move further away from what they dreamed of in childhood and youth. Working through shadow aspects helps us understand ourselves and the reasons behind our relationships with others. It provides answers to the question: “Why can’t I live the way I truly want to?”",
    },
    {
      question: "Is this work done in a state of hypnosis?",
      answer: "No. The essence of this work lies precisely in becoming aware. It involves reflection, analysis, observation, and comparison.",
    },
    {
      question: "What happens during the process of working with your “shadow side”?",
      answer: "A person develops the ability to see situations from different perspectives, understand their reactions, unlock their potential, and become whole. This makes it possible to build relationships and shape one’s life constructively, in alignment with one’s true desires.",
    },
  ]
  expandedIndex: number | null = null;

  showAnswer(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
