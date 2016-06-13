import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SettingsService {
  baseUrl:string;

  constructor(private http:Http) {
    this.baseUrl = '/settings';
  }


  get() {
    return this.http
      .get(this.baseUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //todo impure api update call, think about refactoring
  update(data) {
    let reqObj = JSON.stringify(data);
    return this.http
      .post(this.baseUrl + '/handle', reqObj)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error:any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}
