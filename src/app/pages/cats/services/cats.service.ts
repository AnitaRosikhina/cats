import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { NCats } from "../interfaces/cats";

@Injectable()
export class CatsService {
  constructor(private httpClient: HttpClient) {}

  search(payload: NCats.Request): Observable<NCats.Item[]> {
    return this.httpClient.get<NCats.Item[]>(
      'https://api.thecatapi.com/v1/images/search',
      { params: { ...payload } }
    ).pipe(
      map(res => res.map(cat => ({ url: cat.url, width: cat.width, height: cat.height })))
    );
  }

  fetchAllBreeds(): Observable<NCats.Breed[]> {
    return this.httpClient.get<NCats.Breed[]>('https://api.thecatapi.com/v1/breeds')
      .pipe(
        map(res => res.map(breed => ({ id: breed.id, name: breed.name })))
      );
  }
}
