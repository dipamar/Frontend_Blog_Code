import { Injectable } from '@angular/core';
//import http client to make a http request
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = `https://blogapp.edwisor.com/api/v1/blogs/`;
  public auth = `ODU4MGM5MWM5ZTJmY2I4YjM3ODkxMTc5ZDA2Mzg1MDFjMWI1OGE5ZjQyYTVjZmUyYjFhMGYxYTg5MmZmNDZiMThjNjBmZTAwNDVkMWU5YmU2OTRiZjIzY2U2ZGE0NTM1NTBkYTZhNGVlOWRkODYzZmRmODMwYWM4ZTliODdhNmIwYg==`;

  constructor(public _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(`Handled error here`);
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(`${this.baseUrl}all?authToken=${this.auth}`);
    //console.log(this.baseUrl +'all?authToken='+this.auth) 
    console.log(`${this.baseUrl}all?authToken=${this.auth}`)
    console.log(myResponse)
    return myResponse;
    console.log(myResponse)
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(`${this.baseUrl}view/${currentBlogId}?authToken=${this.auth}`);
    console.log(`${this.baseUrl}view/${currentBlogId}?authToken=${this.auth}`)
    return myResponse;
    console.log(myResponse);
  }

  public createBlog(blogData):any{
    let myResponse = this._http.post(`${this.baseUrl}create/?authToken=${this.auth}`,blogData);
    console.log('${this.baseUrl}create/?authToken=${this.auth}');
    return myResponse;
  }

  public editBlog(blogId,blogData):any{
    console.log(`In edit`);
    let myResponse = this._http.put(`${this.baseUrl}${blogId}/edit?authToken=${this.auth}`,blogData);
    console.log(`${this.baseUrl}${blogId}/edit?authToken=${this.auth}`);
    return myResponse;

  }

  public deleteBlog(blogId):any{
    let data={};
    let myResponse = this._http.post(`${this.baseUrl}${blogId}/delete?authToken=${this.auth}`,data);
    console.log(`${this.baseUrl}${blogId}/delete?authToken=${this.auth}`);
    return myResponse;

  }

}
