import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class GameService {
  baseUrl:string;

  constructor(private http:Http) {
    this.baseUrl = 'game/'
***REMOVED***

  startEnd() {
    return this.http
      .get(`${this.baseUrl}on`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  nextWord() {
    return this.http
      .get(`${this.baseUrl}next`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  checkAnswer(pickedWord) {
    return this.http
      .get(`${this.baseUrl}check/${pickedWord.id}`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  status() {
    return this.http
      .get(`${this.baseUrl}status`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  highScores() {
    return this.http
      .get(`${this.baseUrl}highscores`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  history() {
    return this.http
      .get(`${this.baseUrl}history`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  breakdown(id) {
    return this.http
      .get(`${this.baseUrl}breakdown/?gameId=${id}`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  private extractData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
***REMOVED***
    let body = res.json();
    return body || {***REMOVED***
***REMOVED***

  private handleError(error:any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
***REMOVED***

}
