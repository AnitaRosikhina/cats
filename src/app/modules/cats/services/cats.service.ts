import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NCats } from "../interfaces/cats";

@Injectable()
export class CatsService {
  // TODO: use interceptor
  private API_KEY = 'live_LUjDetoEEKv3ChelF4eWQbpAgUWcFb8SHskXIRQnI2VCPPDDAlEUPrNb6WKbo0My';

  constructor(private httpClient: HttpClient) {}

  fetchAll(): Observable<NCats.Item[]> {
    return this.httpClient.get<NCats.Item[]>('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': this.API_KEY
      }
    })
  }

  fetchAllBreeds(): Observable<NCats.Breed[]> {
    return this.httpClient.get<NCats.Breed[]>('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': this.API_KEY
      }
    })
  }
}
