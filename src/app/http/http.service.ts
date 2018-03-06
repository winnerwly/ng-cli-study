import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
class Hero {
  id: number;
  name: string;
}
@Injectable()
export class HttpService {
  private heroesUrl = 'http://app.quandikeji.com:8288/quandiExpressSiteManager/store?pagination=1&rownum=10';
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(response => {
      if (response.json().code === 200) {
        return response.json().obj
      }
      return ''
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
