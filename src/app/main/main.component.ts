import { Component, OnInit } from "@angular/core";
import { MainService } from "./main.service";
import { Planet, Dummy } from "../dummy";
import { FormControl } from "@angular/forms";

interface httpSubscribeScheme {
  closed: Boolean;
  unsubscribe: any;
}
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public list: Planet[] = [];
  public searchForm: FormControl = new FormControl("");
  public nextUrl: String = "";
  public previousUrl: String = "";
  public httpSubscriber: httpSubscribeScheme = {
    closed: true,
    unsubscribe: false
  };
  constructor(private _service: MainService) {}

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(inputValue =>
      this.onSearchValueChanges(inputValue)
    );
    this.onSearchValueChanges();
  }

  setPlanets(res) {
    const { results, next, previous } = res;

    this.nextUrl = next;
    this.previousUrl = previous;

    this.list = results;
  }
  onSearchValueChanges(inputValue?: String) {
    const isClosed = this.httpSubscriber.closed;
    if (!isClosed && this.httpSubscriber.unsubscribe) {
      this.httpSubscriber.unsubscribe();
    }

    const httpSubscriber = this._service
      .getPlanets(inputValue)
      .subscribe(res => this.setPlanets(res));

    this.httpSubscriber = httpSubscriber;
  }

  changePage(type) {
    let url: String = "";
    if (type === "previous") {
      url = this.previousUrl;
    } else if (type === "next") {
      url = this.nextUrl;
    }
    const httpSubscriber = this._service
      .changePage(url)
      .subscribe(res => this.setPlanets(res));
    this.httpSubscriber = httpSubscriber;
  }

  getActiveStatus() {
    return !this.httpSubscriber.closed;
  }
}
