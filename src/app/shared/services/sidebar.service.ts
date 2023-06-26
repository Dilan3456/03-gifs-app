import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SidebarService {
  public _arraySdideBar:string[]=[];
  constructor() { }

  get searchHistory()
  {
    return [...this._arraySdideBar]
  }
  insertInto(item:string):void{

    this._arraySdideBar.unshift(item);
    //console.log(this.searchHistory);
  }
}
