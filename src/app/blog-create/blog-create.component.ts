import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["comedy", "drama", "horror", "action", "technology"];

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }//end of blog data
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log(`Blog created`);
        console.log(data);
        this.toastr.success(`Blog Posted Successfully`,`Success`);
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId])
        }, 1000)
      },
      error => {
        console.log(`error occured`);
        console.log(error.Message);
        this.toastr.error(`Oops!! Some error occured...`,`Error`);
      }
    );

  }

}
