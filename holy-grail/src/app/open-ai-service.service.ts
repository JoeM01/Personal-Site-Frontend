import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenAIServiceService {
  private apiUrl = 'https://ls13cyhraj.execute-api.us-east-1.amazonaws.com/dev/generate';

  constructor(private http: HttpClient) {}

  generateResponse(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { params: {} }).pipe(
      map(response => {
        console.log('Raw API response:', response);
        const body = JSON.parse(response.body);
        return body.response;
      })
    );
  }
}
