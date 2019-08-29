import { Injectable } from '@angular/core';
import { Thought } from './thought.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class ThoughtsService {

  thoughtList: Thought[];

  constructor(private _httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
  {
      return new Promise((resolve, reject) => {

          Promise.all([
              this.getThoughts()
          ]).then(
              ([files]) => {
                  resolve();
              },
              reject
          );
      });
  }

  getThoughts(): Promise<any>
  {
      return new Promise((resolve, reject) => {
              this._httpClient.get('api/thoughts')
                  .subscribe((response: any) => {

                      this.thoughtList = response;
                      resolve(this.thoughtList);
                  }, reject);
          }
      );
  }


}
