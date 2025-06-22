import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private httpClient: HttpClient;

  public fetch(url: string, params: any = {}): Observable<any> {
    try {
      return this.httpClient.get(url, {
        headers: {
          'x-api-key': environment.SPOONACULAR_API_KEY,
        },
        params: {
          ...params,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
