import { Injectable } from '@angular/core';
import {RequestOptions, Headers,  Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the PepeApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PepeApi {
  data: any;
  basePath:string = 'http://192.168.1.90:3000/api/';

  constructor(public http: Http) {
    console.log('Hello PepeApi Provider');
  }

    public post(path,send){
        let body = send;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let url = this.basePath + path;
        return new Promise(resolve => {
         this.http.post(url, body, options)
           .map(res => res.json())
           .subscribe(data => {
              this.data = data.message;
              resolve(this.data);
           });
        });
    }

    public delete(path,id){
        let body = id;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = id;
        let url = this.basePath + path;
        return new Promise(resolve => {
         this.http.delete(url, new RequestOptions({
                  headers: headers,
                  body: id
                }))
           .map(res => res.json())
           .subscribe(data => {
              this.data = data.message;
              resolve(this.data);
           });
        });
    }

    public get(path) {
      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
        this.http.get('http://192.168.1.90:3000/api/proyect')
          .map(res => res.json())
          .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
      });
    }

      //convert a json object to the url encoded format of key=value&anotherkye=anothervalue
      private jsonToURLEncoded(jsonString){
        return Object.keys(jsonString).map(function(key){
          return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
      }





  load() {
     if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.

      this.http.get('http://192.168.1.90:3000/api/proyect')
        .map(res => res.json())
        .subscribe(data => {
        this.data = data.message;
        resolve(this.data);
      });

    });
  }
}
