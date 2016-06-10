import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class GameService {

  constructor(private http:Http) {
  }


  startEnd() {
    return this.http
      .get('game/on')
      .map(this.extractData)
      .catch(this.handleError);
  }

  nextWord() {
    return this.http
      .get('game/next')
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkAnswer(pickedWord) {
    return this.http
      .get(`game/check/${pickedWord.id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  status() {
    return this.http
      .get('game/status')
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
