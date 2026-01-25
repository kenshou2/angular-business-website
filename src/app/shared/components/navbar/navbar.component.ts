import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  screenWidth!: number;
  isMobile!: boolean;
  openSideBar = false;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth < 768;
  }

  @HostListener('window:resize')
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth < 768;
  }

  toggleSidebar() {
    this.openSideBar = !this.openSideBar;
  }
}
