import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VueService } from './../page/vue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataIn: FormGroup;
  error: string;

  instaId:string

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private vueService: VueService
        ) { }

  ngOnInit(): void {
    this.vueService.instaApi('aman_tyagi_gudamb').subscribe(
      (data: any) => this.dataIn = data['data'],
      error => this.error = error
    );

  }

  getConnected(){
    console.log(this.instaId)
    ///people-around
    const profiles=localStorage.getItem('profiles') && JSON.parse(localStorage.getItem('profiles')) || [];
    profiles.push(this.instaId);
    localStorage.setItem('profiles',JSON.stringify(profiles));
    this.router.navigate(['/people-around'])
  }
  

}
