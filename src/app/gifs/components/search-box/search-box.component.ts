import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent{
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService,private sidebarservice:SidebarService) {


  }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.sidebarservice.insertInto(newTag);
    this.tagInput.nativeElement.value='';
  }
}
