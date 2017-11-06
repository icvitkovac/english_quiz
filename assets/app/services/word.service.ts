import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'word/';
  }

  search(value: string) {
    return this.http
      .get(`${this.baseUrl}search?value=` + value)
      .map(this.extractData)
      .catch(this.handleError);
  }

  count() {
    return this.http
      .get(`${this.baseUrl}count`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  add(data) {
    const reqObj = JSON.stringify(data);
    return this.http
      .post(`${this.baseUrl}create`, reqObj)
      .map(this.extractData)
      .catch(this.handleError);
  }

  destroy(data) {

    return this.http
      .delete(this.baseUrl + data.id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(data) {

    const headers = new Headers();
    const url = `${this.baseUrl}${data.id}`;
    headers.append('Content-Type', 'application/json');


    return this.http
      .put(url, JSON.stringify(data), { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkAnswer(pickedWord) {
    return this.http
      .get(`${this.baseUrl}${pickedWord.term}/translations/${pickedWord.id}`)
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
    error = error.json();
    const errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}
