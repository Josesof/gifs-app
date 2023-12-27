import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class SearchBoxComponent {

  private gifsService = inject(GifsService);  

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
      this.tagInput.nativeElement.value = ''
    console.log("This is new tag : ", newTag)
  }

}
