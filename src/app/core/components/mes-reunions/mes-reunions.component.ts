import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {SondageService} from '../../services/sondage.service';

@Component({
  selector: 'app-mes-reunions',
  templateUrl: './mes-reunions.component.html',
  styleUrls: ['./mes-reunions.component.css']
})
export class MesReunionsComponent implements OnInit {

  constructor(private globalservice: GlobalService, private router: Router, private sondageService: SondageService) { }
  listMesSondage;
  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] +
        ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.router.navigate(['login']);
    }
    this.sondageService.listMesSondage(JSON.parse(localStorage.getItem('currentUser'))['id']).subscribe(data => {
      this.listMesSondage = data;
      console.log(this.listMesSondage);
    });
  }

}
