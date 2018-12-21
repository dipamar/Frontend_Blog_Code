import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// router module is used to setup applucation level routing
import { RouterModule ,Routes} from '@angular/router';
//import for http call
import { HttpClientModule } from '@angular/common/http';
//importing forms module
import { FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'**',component:HomeComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent}
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
