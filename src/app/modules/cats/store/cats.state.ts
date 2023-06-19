import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { NCats } from "../interfaces/cats";
import { CatsService } from "../services/cats.service";
import { Cats } from "./cats.actions";


export interface CatsStateModel {
  cats: NCats.Item[];
}

const CATS_STATE_TOKEN = new StateToken<CatsStateModel>('cats');

@State({
  name: CATS_STATE_TOKEN,
  defaults: {
    cats: []
  }
})
@Injectable()
export class CatsState {
  constructor(private catsService: CatsService) {}

  @Action(Cats.FetchAll)
  async fetchAll(ctx: StateContext<CatsStateModel>, action: Cats.FetchAll) {
    // const result = await this.catsService.fetchAll();
    // ctx.setState({
    //   cats: [...result]
    // });
  }
}
