import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = '/settings';
  }


  public get() {
    return this.http
      .get(this.baseUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // todo impure api update call, think about refactoring
  public update(data) {
    const reqObj = JSON.stringify(data);
    return this.http
      .post(this.baseUrl + '/handle', reqObj)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public languages() {
    return this.http
      .get('../json/languageMapping.json')
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
