import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VueService } from './../vue.service';

@Component({
  selector: 'app-people-around',
  templateUrl: './people-around.component.html',
  styleUrls: ['./people-around.component.css']
})
export class PeopleAroundComponent implements OnInit {

  lisabeyu_image: string;
  cyruskind_image: string;
  lindseymallon_image: string;
  ardilladeneys_image: string;
  zeejacattack_image: string;
  officialkatka_image: string;
  nu__dao_image: string;
  ianastasiagreen_image: string;

  constructor(private vueService: VueService) { }

  ngOnInit(): void {

    this.vueService.instaApi('lisabeyu').subscribe(res => {
        this.lisabeyu_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('cyruskind').subscribe(res => {
      this.cyruskind_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('_lindseymallon').subscribe(res => {
      this.lindseymallon_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('ardilladeneys').subscribe(res => {
      this.ardilladeneys_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('zeejacattack').subscribe(res => {
      this.zeejacattack_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('officialkatka').subscribe(res => {
      this.officialkatka_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('nu__dao').subscribe(res => {
      this.nu__dao_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('ianastasiagreen').subscribe(res => {
      this.ianastasiagreen_image = res.graphql.user.profile_pic_url;
    });
    

  }

}
