import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
  // TODO: use interceptor
  private API_KEY = 'live_LUjDetoEEKv3ChelF4eWQbpAgUWcFb8SHskXIRQnI2VCPPDDAlEUPrNb6WKbo0My';

  constructor(private httpClient: HttpClient) {}
  //
  // fetchAll() {
  //   'https://api.thecatapi.com/v1/images/search'
  // }
  //
  // getBreedsList() {
  //   'https://api.thecatapi.com/v1/breeds'
  // }
}
