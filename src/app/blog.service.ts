import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-11-20T10:20:47.854Z",
      "created": "2018-10-20T12:20:47.854Z",
      "tags": [],
      "author": "amar",
      "category": "comedy",
      "isPublished": true,
      "views:": 0,
      "bodyHtml": "this is blog1 body",
      "description": "this is blog1 description",
      "title": "this is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2018-11-20T12:20:47.854Z",
      "created": "2018-10-20T10:20:47.854Z",
      "tags": [],
      "author": "dip",
      "category": "horror",
      "isPublished": false,
      "views:": 0,
      "bodyHtml": "this is blog2 body",
      "description": "this is blog2 description",
      "title": "this is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2018-11-20T11:20:47.854Z",
      "created": "2018-10-20T10:20:47.854Z",
      "tags": [],
      "author": "dipamar",
      "category": "comedy",
      "isPublished": true,
      "views:": 0,
      "bodyHtml": "this is blog3 body",
      "description": "this is blog3 description",
      "title": "this is blog 4"
    }
  ];

  constructor() { }
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
        return this.currentBlog;
      }
    }
    console.log(this.currentBlog);
  }
}
