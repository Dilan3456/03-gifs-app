import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { SearchGIF,Gif } from '../Interfaces/search.response';
@Injectable({providedIn: 'root'})
export class GifsService {
  public gifList:Gif []=[];
  private _tagsHistory:string[]=[];
  private _apiKey:string = "873G16GJ0pkyhXBT8JbppxJwhBKhw37J";
  private serviceURL:string='https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadToLocalStorage();

  }
  get tagsHistory()
  {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag:string){
    tag = tag.toLowerCase();
   if(this._tagsHistory.includes(tag))
   {
    this._tagsHistory=this._tagsHistory.filter((oldtag)=> oldtag !== tag);
   }
   this._tagsHistory.unshift(tag);
   this._tagsHistory=this.tagsHistory.splice(0,10);
   this.saveLocalStorage();
  }
  private saveLocalStorage():void
  {
    localStorage.setItem('History',JSON.stringify(this._tagsHistory));
  }
  private loadToLocalStorage():void
  {
    if(!localStorage.getItem('History'))return;
    this._tagsHistory=JSON.parse(localStorage.getItem('History')!);
    if(this._tagsHistory.length===0)return;
    this.searchTag(this._tagsHistory[0]);

  }

 searchTag(tag:string):void{
    if(tag.length ===0 ) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key',this._apiKey)
    .set('limit','10')
    .set('q',tag)

    this.http.get<SearchGIF>(`${this.serviceURL}/search`,{params})
    .subscribe(resp=>{
      this.gifList = resp.data;
      console.log({gifs: this.gifList});
    });
 }
 }
