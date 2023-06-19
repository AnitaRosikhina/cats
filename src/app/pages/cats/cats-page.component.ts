import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Cats } from "./store/cats.actions";
import { NCats } from "./interfaces/cats";

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss']
})
export class CatsPageComponent implements OnInit {
  parameters: NCats.Request = {
    limit: 10,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new Cats.Search({...this.parameters}));
  }
}
