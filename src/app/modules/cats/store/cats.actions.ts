import { NCats } from "../interfaces/cats";

export namespace Cats {
  export class Search {
    static readonly type = '[Cats] Search';
    constructor(public payload: NCats.Request) {}
  }
}
