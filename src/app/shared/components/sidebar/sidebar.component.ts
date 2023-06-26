import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // @ViewChild('txtTagInput')
  // public tagInput!:ElementRef<HTMLInputElement>;
  public listItems:string[]=[];
  constructor(private gifservice:GifsService)
  {


  }

  get tags()
  {
    return this.gifservice.tagsHistory;
  }
  public clickSideBar(tag:string):void {

      this.gifservice.searchTag(tag);
  }


}
