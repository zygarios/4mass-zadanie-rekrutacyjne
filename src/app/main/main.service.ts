import { Injectable } from '@angular/core';
import { Planet, dummyData } from '../dummy';

interface Item{
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  public list: Planet[];

constructor() {
  this.list = dummyData.results;

}



}
