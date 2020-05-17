import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public username: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public menuactive: BehaviorSubject<string> = new BehaviorSubject<string>('creerdoodle');
  constructor() { }
}
