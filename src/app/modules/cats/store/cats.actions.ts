import { NCats } from "../interfaces/cats";

export namespace Cats {
  export class FetchAll {
    static readonly type = '[Cats] Fetch All';
  }

  export class Filter {
    static readonly type = '[Cats] Filter';
    constructor(public cats: NCats.Item[]) {}
  }
}
