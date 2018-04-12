import { ArticleService } from './article/article.service';

// import { IPosts } from './entities/app.iposts';
import { Component ,OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ArticleService]
})
export class AppComponent implements OnInit {
//   _postsArray: IPosts[];

  constructor() {
  }

//   getPosts(): void {
//       this.apiSerivce.getPosts()
//           .subscribe(
//               resultArray => this._postsArray = resultArray,
//               error => console.log("Error :: " + error)
//           )
          
//   }

  ngOnInit(): void {
    //   this.getPosts();
  }
}

