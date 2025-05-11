import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(HttpClient: HttpClient) {
    this.httpClient = HttpClient;
  }

  private httpClient: HttpClient;

  public fetch(url: string, params: any = {}) {
    try {
      const data = this.httpClient.get(url, {
        headers: {
          'x-api-key': (environment as any).SPOONACULAR_API_KEY,
        },
        params: {
          ...params,
        },
      });
      console.log('Data fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
