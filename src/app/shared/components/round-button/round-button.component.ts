import { NgStyle } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  imports: [NgStyle],
  templateUrl: './round-button.component.html',
  styleUrl: './round-button.component.scss'
})
export class RoundButtonComponent implements OnInit {
  text = input("Placeholder");
  minWidth = input("197");
  minHeight = input("68");
  radius = input("40");
  backgroundImage = input("linear-gradient(to right, #F6E0A4, #D3B269");  
  backroundColor = input("#E5CB8D");
  iridescent = input(false);

  customStyle = {};

  ngOnInit(): void {
    this.customStyle = {
      'min-width': `${this.minWidth()}px`,
      'min-height': `${this.minHeight()}px`,
      'border-radius': `${this.radius()}px`,
      'background-image': `${this.backgroundImage()}`,
      'background-color': `${this.backroundColor()}`,      
    }
  }
}