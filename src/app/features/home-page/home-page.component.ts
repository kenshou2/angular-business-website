import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from './components/faq/faq.component';
import { HeroMirrorComponent } from './components/hero-mirror/hero-mirror.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    AboutComponent, 
    CompanyServicesComponent, 
    TestimonialsComponent,
    FaqComponent,
    HeroMirrorComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
