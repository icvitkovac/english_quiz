import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class InitService {
  private baseUrl: string;


  constructor(private http: Http) {
    this.baseUrl = 'init/';
***REMOVED***

  public get() {
    return this.http
      .get(`${this.baseUrl}get`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
***REMOVED***
    let body = res.json();
    return body || {***REMOVED***
***REMOVED***

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
***REMOVED***

}