import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class WordService {

  constructor(private http:Http) {
  }

  search(value:string) {
    return this.http
      .get('word/search?value=' + value)
      .map(this.extractData)
      .catch(this.handleError);
  }

  count() {
    return this.http
      .get('word/count')
      .map(this.extractData)
      .catch(this.handleError);
  }

  add(data) {
    let reqObj = JSON.stringify(data);
    return this.http
      .post('word/create', reqObj)
      .map(this.extractData)
      .catch(this.handleError);
  }

  start() {
    return this.http
      .get('game/start')
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkAnswer(pickedWord) {
    return this.http
      .get(`word/${pickedWord.term}/translations/${pickedWord.id}`)
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
