import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn;
  constructor(private globalservice: GlobalService) {
    this.globalservice.isUserLoggedIn
      .subscribe(value => {
        this.isUserLoggedIn = value;
      });
    //this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
  }

}
