import {Injectable, bind} from 'angular2/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../models';

/**
 * UserService manager our current user
 */
@Injectable()
export class UserService {
  // currentUser manages our current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export var UserServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];
