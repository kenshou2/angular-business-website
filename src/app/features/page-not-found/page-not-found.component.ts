import { Component } from '@angular/core';
import { RoundButtonComponent } from '../../shared/components/round-button/round-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RoundButtonComponent, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
