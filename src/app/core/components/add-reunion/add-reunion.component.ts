import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {SondageService} from '../../services/sondage.service';
import {Message} from 'primeng/api';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-add-doodle',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css']
})
export class AddDoodleComponent implements OnInit {

  typeSondage: string = 'typeSondage1';
  selectedValues: string[] = [];
  selectedValues2: string[] = [];
  date3: Date;
  date8: Date;



  aUnDejDate: string[] = [];
  Heurepropose: string = '';
  datepropose: string = '';

  dateListe = [];
  intitule: string = '';
  resume: string = '';
  participants: any = [];
  msgs: Message[] = [];


  constructor(private globalservice: GlobalService, private router: Router, private sondageService: SondageService, private utilisateurService: UtilisateurService) { 
    this.utilisateurService.getUsers().subscribe(data => {
        if(data != null){
          this.participants = data;
        }
    });
    
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] +
        ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.router.navigate(['login']);
    }
  }

  sondageAdd(event) {
    event.preventDefault()
    const target = event.target
    const intitule = target.querySelector('#intitule').value;
    const resume = target.querySelector('#resume').value;
    const idResponsable = JSON.parse(localStorage.getItem('currentUser'))['id'];

    this.sondageService.addReunion(idResponsable, intitule, resume, this.dateListe, this.participants).subscribe(data => {
      if (data != null) {
        this.router.navigate(['adddoodle']);
        this.participants = [];
        this.dateListe = [];
        this.resume = '';
        this.intitule = '';
        this.show('success','Réunion enregistrée avec succès.');
        //this.router.navigate(['']);
      } else {
        this.router.navigate(['logout']);
      }
    })
  }

  add_date() {
    var d = new Date(this.datepropose);
    var datePipe = new DatePipe('en-FR');
    this.dateListe.push({
      daterelle: this.datepropose,
      date:  datePipe.transform(d, 'dd-MM-yyyy') + ' ' + datePipe.transform(this.Heurepropose, 'HH:mm:00') ,
      aUnDejeuner: Boolean(this.aUnDejDate.length),
      estValider: false

    });
  }

  remove_date(txt) {
    console.log(txt);
    const index: number = this.dateListe.indexOf(txt);
    console.log(index);
    if (index === -1) {
      this.dateListe.splice(index, 1);
    }
  }

  show(type,message) {
    this.msgs.push({severity:type, summary:message});
  }

  hide() {
    this.msgs = [];
  }
}
