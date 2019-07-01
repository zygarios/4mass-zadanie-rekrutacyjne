import { Injectable } from '@angular/core';
import { Planet, dummyData } from '../dummy';
import { HttpClient } from '@angular/common/http';

interface Item{
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  public list: Planet[];

constructor(private _httpClient: HttpClient) {
  this.list = dummyData.results;

}



}
