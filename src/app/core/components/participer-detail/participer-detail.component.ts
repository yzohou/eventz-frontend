import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {SondageService} from '../../services/sondage.service';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-participer-detail',
  templateUrl: './participer-detail.component.html',
  styleUrls: ['./participer-detail.component.css']
})
export class ParticiperDetailComponent implements OnInit {

  idReponse;
  idReunion;
  msgs: Message[] = [];
  constructor(private activatedroute: ActivatedRoute, private route: Router,
              private globalservice: GlobalService, private sondageService: SondageService) { }

  sondageDetail;

  ngOnInit() {
    this.idReponse = this.activatedroute.snapshot.paramMap.get('idReponse');
    this.idReunion = this.activatedroute.snapshot.paramMap.get('idReunion');

    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] +
        ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.route.navigate(['login']);
    }
    this.sondageService.validerProposition(this.idReponse,this.idReunion, JSON.parse(localStorage.getItem('currentUser'))['id'] ).subscribe(data => {
      this.sondageDetail = data;
      console.log(this.sondageDetail);
      this.show('success','Choix enregistré avec succès.');
      this.route.navigate(['mes-sondages']);
      
    });
  }

  show(type,message) {
    this.msgs.push({severity:type, summary:message});
  }

  hide() {
    this.msgs = [];
  }

}
