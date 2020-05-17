import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getLogin(username, password) {
    // post these details to API server return user info if correct
    return this.http.post('/rest/utilisateurs/login', {
      "email": username,
      "password": password
    });
  }

  registerUser(nom, prenom, email, password) {
    // post these details to API server return user info if correct
    return this.http.post('/rest/utilisateurs/add', {
      "nom": nom,
      "prenom": prenom,
      "email": email,
      "password": password
    });
  }

  getUsers() {
    return this.http.get('/rest/utilisateurs/all');
  }
}
