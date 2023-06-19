export namespace NCats {
  export interface Request {
    limit: number;
    breed_ids: string[];
  }

  export interface Response {
    cats: Item[];
  }

  export interface Item {
    url: string;
    width: number;
    height: number;
  }
}
