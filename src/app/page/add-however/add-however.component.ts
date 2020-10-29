import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VueService } from './../vue.service';

@Component({
  selector: 'app-add-however',
  templateUrl: './add-however.component.html',
  styleUrls: ['./add-however.component.css']
})
export class AddHoweverComponent implements OnInit {

  addHoweverForm: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: VueService
  ) { }

  ngOnInit(): void {
    this.addHoweverForm = this.fb.group({
      name: ['', Validators.required],
      url_twi: ['', Validators.required],
      url_ins: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get name() { return this.addHoweverForm.get('name'); }
  get url_twi() { return this.addHoweverForm.get('url_twi'); }
  get url_ins() { return this.addHoweverForm.get('url_ins'); }
  get email() { return this.addHoweverForm.get('email'); }

  addHowever() {

    
    let obj = {
      name : this.name.value,
      url_twi : this.url_twi.value,
      url_ins : this.url_ins.value,
      email : this.email.value
    }
    console.log(obj);

  }

}
