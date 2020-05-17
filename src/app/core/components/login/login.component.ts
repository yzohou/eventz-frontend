import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {UtilisateurService} from '../../services/utilisateur.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser;
  erreurLogin = '';
  constructor(private router: Router, private globalservice: GlobalService, private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.utilisateurService.getLogin(username, password).subscribe(data => {
      if (data != null) {
        this.router.navigate(['home']);
        this.globalservice.isUserLoggedIn.next(true);
        this.globalservice.username.next(data['nom'] + ' ' + data['prenom']);
        localStorage.setItem('currentUser', JSON.stringify({ 'id': data['id'], 'nom': data['nom'],
          'prenom': data['prenom'],'email': data['email']}));
        this.currentUser = localStorage.getItem('currentUser');
        console.log(this.currentUser);
      } else {
        this.router.navigate(['login']);
        this.erreurLogin = 'Veuillez vérifier votre mail ou inscrivez vous';
      }
    });
  }

}
