import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NCats } from "../interfaces/cats";

@Injectable()
export class CatsService {

  constructor(private httpClient: HttpClient) {}

  search(payload: NCats.Request): Observable<NCats.Item[]> {
    return this.httpClient.get<NCats.Item[]>('https://api.thecatapi.com/v1/images/search', {
      params: {...payload}
    });
  }

  fetchAllBreeds(): Observable<NCats.Breed[]> {
    return this.httpClient.get<NCats.Breed[]>('https://api.thecatapi.com/v1/breeds');
  }
}
