import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private globalservice: GlobalService, private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    const target = event.target
    const nom = target.querySelector('#nom').value;
    const prenom = target.querySelector('#prenom').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.utilisateurService.registerUser(nom, prenom, email, password).subscribe(data => {
      if (data != null) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['register']);
        // this.erreurLogin = 'Veuillez vérifier votre mail ou inscrivez vous';
      }
    });
  }
}
