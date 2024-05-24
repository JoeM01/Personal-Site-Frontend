import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class OpenAIServiceService {
  private apiUrl = 'https://tz3zwtwrnb.execute-api.us-east-1.amazonaws.com/generate';

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  sendMessage(message: string): Observable<any> {
    const sessionKey = this.sessionService.getSessionKey();
    const payload = {
      key1: sessionKey,
      key2: message
    };
    return this.http.post<any>(this.apiUrl, JSON.stringify(payload));
  }
}
