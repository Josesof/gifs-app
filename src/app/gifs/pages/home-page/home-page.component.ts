import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  private gifsService = inject(GifsService);

  get gifs(): Gif[] {
      return this.gifsService.gifList;
  }

  
}
