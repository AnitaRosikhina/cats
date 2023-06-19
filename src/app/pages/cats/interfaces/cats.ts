export namespace NCats {
  export interface Request {
    limit: number;
    breed_ids: string | string[];
  }

  export interface Response {
    cats: Item[];
  }

  export interface Item {
    url: string;
    width: number;
    height: number;
  }

  export interface Breed {
    id: string;
    name: string;
  }
}
