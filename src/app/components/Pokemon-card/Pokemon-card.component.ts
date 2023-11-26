import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Pokemon-card works!</p>`,
  templateUrl: 'Pokemon-card.component.html',
  styleUrl: 'Pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {


 }
