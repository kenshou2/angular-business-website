import { Component } from '@angular/core';
import { CompanyService } from './models/company-services.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-services',
  imports: [RouterLink],
  templateUrl: './company-services.component.html',
  styleUrl: './company-services.component.scss'
})
export class CompanyServicesComponent {
  servicesData: CompanyService[] = [
    {
      name: "Consultation",
      description: "Why is it so important to turn toward your shadow side? Because it helps us understand that every conflict carries some kind of benefit. Identifying the causes of conflicts and exploring ways to work through them can be supported through consultation with a specialist.",
      bgImage: "images/consultations-service.jpg",
    },
    {
      name: "Individual session",
      description: "Only by healing the Self can we begin to live a free life—free from our weaknesses, dependencies, unpredictable behaviors, and, most importantly, free from the pain we have carried for many years. This is exactly the kind of result that can be achieved through individual work.",
      bgImage: "images/individuals-service.jpg",
    },
    {
      name: "Group sessions",
      description: "We each build our personalities in our own unique way. For some, fear becomes a positive motivation to overcome challenges; for others, it creates a sense of being a victim. Some people use anger to control those around them, while others are afraid of anger and never express it themselves. Group work helps us see and understand our problems “from the outside.”",
      bgImage: "images/group-sessions-service.jpg",
    }
  ]
}
