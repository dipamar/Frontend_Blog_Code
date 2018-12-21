import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public possibleCategories = ["comedy", "drama", "horror", "action", "technology"];
  public currentBlog;
  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        this.currentBlog = data['data'];
        console.log(this.currentBlog);
      },
      error=>{
        console.log(`error occured`);
        console.log(error.errorMessage);
      }
    );
  }
public editBlog():any{
  this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
    data=>{
      console.log(this.currentBlog);
      this.toastr.success(`Blog Edited Successfully`,`successful Edit`);
      console.log(`/blog/${this.currentBlog.blogId}`)
      setTimeout(() => {
        this.router.navigate(['/blog',this.currentBlog.blogId])
      }, 1000)
    },
    error=>{
      console.log(`error occured`);
      console.log(error.errorMessage);
      this.toastr.error("Error while editing",`error`);
    }
  );
}
}
