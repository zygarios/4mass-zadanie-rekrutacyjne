import { Injectable } from "@angular/core";
import { Planet, dummyData } from "../dummy";
import { HttpClient } from "@angular/common/http";

interface Item {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class MainService {
  public list: Planet[];

  constructor(private _httpClient: HttpClient) {
    this.list = dummyData.results;
  }

  getPlanets(searchValue?: String) {
    if (searchValue) {
      return this._httpClient.get(
        `https://swapi.co/api/planets/?search=${searchValue}`
      );
    } else {
      return this._httpClient.get("https://swapi.co/api/planets");
    }
  }

  changePage(url) {
    return this._httpClient.get(url);
  }
}
