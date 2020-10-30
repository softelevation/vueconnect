import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VueService } from './../vue.service';

@Component({
  selector: 'app-people-around',
  templateUrl: './people-around.component.html',
  styleUrls: ['./people-around.component.css']
})
export class PeopleAroundComponent implements OnInit {

  lisabeyu_image = "assets/images/download.jpg";
  lisabeyu_name : string;
  cyruskind_image = "assets/images/download.jpg";
  cyruskind_name : string;
  lindseymallon_image = "assets/images/download.jpg";
  lindseymallon_name : string;
  ardilladeneys_image = "assets/images/download.jpg";
  ardilladeneys_name : string;
  zeejacattack_image = "assets/images/download.jpg";
  zeejacattack_name : string;
  officialkatka_image = "assets/images/download.jpg";
  officialkatka_name : string;
  nu__dao_image = "assets/images/download.jpg";
  nu__dao_name : string;
  ianastasiagreen_image = "assets/images/download.jpg";
  ianastasiagreen_name : string;

  connected_image = "assets/images/download.jpg";
  connected_name : string;
  connected_id : string;
  constructor(private vueService: VueService,
    private route: ActivatedRoute,
    private router: Router) { }

  openPage(){
    console.log("openpage")
    this.router.navigate(['/raisedproper',this.connected_id])
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
      if(params.id){
        this.connected_id=params.id.replace('@','');
        
        this.vueService.instaApi(this.connected_id).subscribe(res => {
            this.connected_name = res.graphql.user.full_name;
            this.connected_image = res.graphql.user.profile_pic_url;
        });
      }
    });

    this.vueService.instaApi('lisabeyu').subscribe(res => {
        this.lisabeyu_name = res.graphql.user.full_name;
        this.lisabeyu_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('cyruskind').subscribe(res => {
      this.cyruskind_name = res.graphql.user.full_name;
      this.cyruskind_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('_lindseymallon').subscribe(res => {
      this.lindseymallon_name = res.graphql.user.full_name;
      this.lindseymallon_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('ardilladeneys').subscribe(res => {
      this.ardilladeneys_name = res.graphql.user.full_name;
      this.ardilladeneys_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('zeejacattack').subscribe(res => {
      this.zeejacattack_name = res.graphql.user.full_name;
      this.zeejacattack_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('officialkatka').subscribe(res => {
      this.officialkatka_name = res.graphql.user.full_name;
      this.officialkatka_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('nu__dao').subscribe(res => {
      this.nu__dao_name = res.graphql.user.full_name;
      this.nu__dao_image = res.graphql.user.profile_pic_url;
    });

    this.vueService.instaApi('thekieulinh').subscribe(res => {
      this.ianastasiagreen_name = res.graphql.user.full_name;
      this.ianastasiagreen_image = res.graphql.user.profile_pic_url;
    });
    

  }

}
