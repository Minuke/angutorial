import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Colour } from '@core/models/enums/colour.enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    public color  =  input.required<string>();

    get cardColor(): string {
      switch (this.color()) {
        case 'easy':
          return Colour.EASY; 
        case 'intermediate':
          return Colour.INTERMEDIATE;
        case 'advanced':
          return Colour.ADVANCED;
        default:
          return Colour.DEFAULT;
      }
    }
}
