import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class WordService {

  constructor(private http:Http) {
***REMOVED***

  search(value:string) {
    return this.http
      .get('word/search?value=' + value)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  count() {
    return this.http
      .get('word/count')
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  add(data) {
    let reqObj = JSON.stringify(data);
    return this.http
      .post('word/create', reqObj)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  delete(data) {

    return this.http
      .delete('word/' + data.id)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  update(data) {

    let headers = new Headers();
    let url = `word/${data.id}`;
    headers.append('Content-Type', 'application/json');


    return this.http
      .put(url, JSON.stringify(data), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  start() {
    return this.http
      .get('game/start')
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  checkAnswer(pickedWord) {
    return this.http
      .get(`word/${pickedWord.term}/translations/${pickedWord.id}`)
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
