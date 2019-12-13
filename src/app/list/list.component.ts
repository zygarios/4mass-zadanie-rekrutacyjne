import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Planet } from "../dummy";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() planetsList: Planet[] = [];

  @Input() previous = "";
  @Input() next = "";

  @Output()
  eventChangePage = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  changePage(type: String) {
    this.eventChangePage.emit(type);
  }
}
