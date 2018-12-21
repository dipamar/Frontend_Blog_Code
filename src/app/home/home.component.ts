import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs=``;
  constructor(public bloghttpService: BlogHttpService) {
  }

  ngOnInit() {
    this.bloghttpService.getAllBlogs().subscribe(
      data => {
        
        this.allBlogs = data["data"];
        console.log(this.allBlogs)
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }

}
