import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isCollapsed = false;

  title = '' ;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const that = this;
    this.router.events.subscribe((event: NavigationEnd) => {
        if (that.activatedRoute.firstChild) {
          that.activatedRoute.firstChild.data.subscribe( data => {
            that.title = data.title;
            console.log(that.title);
           }
          );
        }
     }
    );

  }

}
