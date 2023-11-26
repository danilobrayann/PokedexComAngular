import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PokemonCardComponent} from "../Pokemon-card/Pokemon-card.component"
@Component({
    selector: 'app-pokemon-list',
    standalone: true,
    template: `<p>pokemon-list works!</p>`,
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PokemonCardComponent
    ]
})
export class PokemonListComponent { 

    pokemons = [1,2,3,4,5];
}
