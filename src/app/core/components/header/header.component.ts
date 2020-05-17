import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;
  currentUser;
  username;

  constructor(private globalservice: GlobalService) {
    this.globalservice.isUserLoggedIn
      .subscribe(value => {
        this.isUserLoggedIn = value;
      });
    this.globalservice.username
      .subscribe(value => {
        this.username = value;
      });
  }

  ngOnInit() {
  }

}
