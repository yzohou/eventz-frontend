import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  constructor(private http: HttpClient) { }

  addReunion(idResponsable, intitule, resume, dateListe, participants) {
    return this.http.post('/rest/reunion/add-reunion', {
      "idCreateur": idResponsable,
      "intitule": intitule,
      "resume": resume,
      "datesChoisies": dateListe,
      "participants": participants
    });
  }

  listMesSondage(idresponsable) {
    return this.http.get('/rest/sondage/mes-sondages/' + idresponsable);
  }

  sondageDetail(idSondage) {
    return this.http.get('/rest/sondage/' + idSondage);
  }


  validerProposition(idReponse, idReunion, idParticipant) {
    return this.http.post('/rest/sondage/selected-date/', {
      "idSelectedDate": idReponse,
      "idReunion": idReunion,
      "idParticipant": idParticipant
    });
  }

}
