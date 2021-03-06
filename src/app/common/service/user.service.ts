import { Injectable } from '@angular/core';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.user = new User();
    this.user.language = "eng";
  }
}
