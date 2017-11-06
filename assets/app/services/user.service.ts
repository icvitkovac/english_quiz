import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private baseUrl: string;


  constructor(private http: Http) {
    this.baseUrl = 'user/';
  }

  public update(updateObj) {
    return this.http
      .put(`${this.baseUrl}update`, updateObj)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public setLocale(locale) {
    return this.http
      .put(`${this.baseUrl}setLocale`, { locale })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}
