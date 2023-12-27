import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  private gifsService = inject(GifsService);

 

  get tags() {
   return  this.gifsService.tagHistory;
  }



  searchTag(tag: string) {
           this.gifsService.searchTag(tag);
  }

}
