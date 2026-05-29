import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Socket {
  readonly endpoint = 'ws://localhost:4000';
}
