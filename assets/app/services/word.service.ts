import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class WordService {
  private baseUrl:string;

  constructor(private http:Http) {
    this.baseUrl = 'word/';
***REMOVED***

  search(value:string) {
    return this.http
      .get(`${this.baseUrl}search?value=` + value)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  count() {
    return this.http
      .get(`${this.baseUrl}count`)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  add(data) {
    let reqObj = JSON.stringify(data);
    return this.http
      .post(`${this.baseUrl}create`, reqObj)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  destroy(data) {

    return this.http
      .delete(this.baseUrl + data.id)
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  update(data) {

    let headers = new Headers();
    let url = `${this.baseUrl}${data.id}`;
    headers.append('Content-Type', 'application/json');


    return this.http
      .put(url, JSON.stringify(data), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
***REMOVED***

  checkAnswer(pickedWord) {
    return this.http
      .get(`${this.baseUrl}${pickedWord.term}/translations/${pickedWord.id}`)
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
    error = error.json();
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
***REMOVED***

}
