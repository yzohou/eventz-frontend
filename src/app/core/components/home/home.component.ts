import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globalservice: GlobalService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] + ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
