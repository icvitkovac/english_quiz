import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class GameService {
  private baseUrl: string;


  constructor(private http: Http) {
    this.baseUrl = 'game/';
***REMOVED***

  public on(type: string) {
    return this.http
      .post(`${this.baseUrl}on`, { type })
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public over() {
    return this.http
      .get(`${this.baseUrl}over`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public nextWord() {
    return this.http
      .get(`${this.baseUrl}next`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public checkAnswer(pickedWord) {
    return this.http
      .get(`${this.baseUrl}check/${pickedWord.id}`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public checkExisting(enteredWord: string) {
    return this.http
      .get(`${this.baseUrl}check/${enteredWord}`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public status() {
    return this.http
      .get(`${this.baseUrl}status`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public report(translation: string) {
     return this.http
      .post(`${this.baseUrl}report`, {translation})
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public highScores() {
    return this.http
      .get(`${this.baseUrl}highscores`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public history() {
    return this.http
      .get(`${this.baseUrl}history`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  public breakdown(id) {
    return this.http
      .get(`${this.baseUrl}breakdown/?gameId=${id}`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
***REMOVED***
    const body = res.json();
    return body || {***REMOVED***
***REMOVED***

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
***REMOVED***

}
