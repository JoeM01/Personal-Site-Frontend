import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionKey: string;
  private readonly sessionKeyName = 'sessionKey';

  constructor() {
    this.sessionKey = this.getSessionKeyFromStorage() || this.generateSessionKey();
  }

  private generateSessionKey(): string {
    const newSessionKey = uuidv4();
    localStorage.setItem(this.sessionKeyName, newSessionKey);
    return newSessionKey;
  }

  private getSessionKeyFromStorage(): string | null {
    return localStorage.getItem(this.sessionKeyName);
  }

  getSessionKey(): string {
    return this.sessionKey;
  }
}
