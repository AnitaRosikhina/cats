import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { NCats } from "../interfaces/cats";
import { CatsService } from "../services/cats.service";
import { Cats } from "./cats.actions";
import { tap } from "rxjs";


export interface CatsStateModel {
  cats: NCats.Item[];
  breeds: NCats.Breed[];
}

const CATS_STATE_TOKEN = new StateToken<CatsStateModel>('cats');

@State({
  name: CATS_STATE_TOKEN,
  defaults: {
    cats: [],
    breeds: []
  }
})
@Injectable()
export class CatsState {
  @Selector()
  static breeds(state: CatsStateModel) {
    return state.breeds;
  }

  @Selector()
  static cats(state: CatsStateModel) {
    return state.cats;
  }

  constructor(private catsService: CatsService) {}

  @Action(Cats.Search)
  search(ctx: StateContext<CatsStateModel>, { payload }: Cats.Search) {
    return this.catsService.search(payload).pipe(
      tap(results => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          cats: [...results]
        });
      }),
    );
  }

  @Action(Cats.FetchAllBreeds)
  fetchAllBreeds(ctx: StateContext<CatsStateModel>) {
    return this.catsService.fetchAllBreeds().pipe(
      tap(results => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          breeds: [...results]
        });
      }),
    );
  }
}
