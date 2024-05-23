import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenAIServiceService {
  private apiUrl = 'https://9guhy3bpr0.execute-api.us-east-1.amazonaws.com/generate';

  constructor(private http: HttpClient) {}

  sendMessage(message: string, sessionId: string): Observable<any> {
    const payload = {
      key1: sessionId,
      key2: message
    };
    return this.http.post<any>(this.apiUrl, JSON.stringify(payload));
  }
}
