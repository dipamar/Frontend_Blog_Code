import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common'
//import for Router to collect the passed variables from view into this component
import { ActivatedRoute, Router } from '@angular/router'
//import http service to use
import { BlogHttpService } from '../blog-http.service';
//import for toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog: any = ``;
  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, private toastr: ToastrService,private location:Location) {
    console.log("constructor");
  }

  ngOnInit() {
    //getting blog id from the route
    console.log("ngInit");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {

        this.currentBlog = data["data"];
        console.log(this.currentBlog)
      },
      error => {
        console.log(error.errorMessage)

      }
    )
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        this.toastr.success('Blog Deleted Successfully', 'Success');
        console.log(`deleted sucessfully`);
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 1000)
      },
      error => {
        this.toastr.error(`Error while deleting`, `Error`);
        console.log(`Delete Error`);
        console.log(error.errorMessage);
      }
    );

  }
  public goBacktoThePreviousPage():any{
    this.location.back();
  }
}
