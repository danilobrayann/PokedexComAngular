import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>pokemon-list works!</p>`,
  templateUrl:'./pokemon-list.component.html'       ,
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent { }
