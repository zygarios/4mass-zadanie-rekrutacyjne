import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list:Planet[] = [];

  constructor(private _service: MainService) { }

  ngOnInit() {
   this.list = this._service.list;
  }

onSearchValueChanges(inputElement:HTMLInputElement){

}

}
