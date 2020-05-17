import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from './core/services/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doodle-front';

  userListes: any;

  ngOnInit() {
  }

  constructor(private utilisateurService: UtilisateurService) {
    //localStorage.clear();
   /* console.log('tot');
    localStorage.setItem('currentUser', JSON.stringify({ 'token': 'token', 'name': 'name' }));
    this.utilisateurService.getUtilisateur()
    .subscribe((data) => {
      /!* tslint:disable:no-string-literal*!/
      this.userListes = data;
      console.log(data);
    });
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    if(localStorage.getItem('currentUser')) {
      console.log('lol1');
    }
    localStorage.clear();
    if(localStorage.getItem('currentUser')) {
      console.log('lol2');
    }
    console.log(JSON.parse(localStorage.getItem('currentUser')));*/
  }
}

