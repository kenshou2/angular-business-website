import { Component } from '@angular/core';
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-mirror',
  imports: [RoundButtonComponent, RouterLink],
  templateUrl: './hero-mirror.component.html',
  styleUrl: './hero-mirror.component.scss'
})
export class HeroMirrorComponent {

}
