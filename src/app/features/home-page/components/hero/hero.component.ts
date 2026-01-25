import { Component } from '@angular/core';
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RoundButtonComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
