import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionKey: string;
  private readonly sessionKeyName = 'sessionKey';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.sessionKey = this.getSessionKeyFromStorage() || this.generateSessionKey();
  }

  private generateSessionKey(): string {
    const newSessionKey = uuidv4();
    if (this.isBrowser) {
      localStorage.setItem(this.sessionKeyName, newSessionKey);
    }
    return newSessionKey;
  }

  private getSessionKeyFromStorage(): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(this.sessionKeyName);
    }
    return null;
  }

  getSessionKey(): string {
    return this.sessionKey;
  }
}
