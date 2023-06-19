import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Cats } from "./store/cats.actions";
import { NCats } from "./interfaces/cats";
import { CatsState } from "./store/cats.state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsPageComponent implements OnInit {
  @Select(CatsState.breeds) breeds$!: Observable<NCats.Breed[]>;
  @Select(CatsState.cats) cats$!: Observable<NCats.Item[]>;

  defaultFilters: NCats.Request = {
    limit: 10,
    breed_ids: ''
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchAllBreeds();
    this.search(this.defaultFilters);
  }

  fetchAllBreeds(): void {
    this.store.dispatch(new Cats.FetchAllBreeds());
  }

  search(payload: NCats.Request): void {
    this.store.dispatch(new Cats.Search(payload));
  }
}
