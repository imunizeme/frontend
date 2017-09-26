import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http,
  ) { }

  login () {
    const headers = new Headers({
      'Authorization': 'Basic NDUxOTY2MzE4MDE6aW11bml6ZW1l'
    });

    const url = '/auth/auth';
    this.http.post(url, {}, new RequestOptions({ headers: headers })).map((response: Response) => response)
    .subscribe(
      response => {
        const data = response.json();
        if (data.token) {
          localStorage.setItem('imunize-app', JSON.stringify(data));
        }
      },
      error => {
        console.log(error, 'Error in login!');
      }
    );
  }

  jwt() {
    const token = JSON.parse(localStorage.getItem('imunize-app')).token;
    const headers = new Headers({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    });
    return new RequestOptions({ headers: headers });
  }

  filter (params?: string): Observable<any> {
    let url = '/api/_QUERIES/vacinas/report?1=1';
    if (params) { url += params; }

    return this.http.get(url, this.jwt())
      .map((response: Response) => {
        return response.text() ? response.json() : [];
      });
  }

}
