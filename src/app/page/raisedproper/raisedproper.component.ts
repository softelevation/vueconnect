import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VueService } from './../vue.service';

@Component({
  selector: 'app-raisedproper',
  templateUrl: './raisedproper.component.html',
  styleUrls: ['./raisedproper.component.css']
})
export class RaisedproperComponent implements OnInit {

  user_id: string;
  user_name: string;
  username: string;
  user_image = "assets/images/download.jpg";
  error: string;
  constructor(private route: ActivatedRoute,private vueService: VueService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.vueService.instaApi(params.get('productId')).subscribe(res => {
          this.user_name = res.graphql.user.full_name;
          this.user_id = res.graphql.user.username;
          this.username = '@'+res.graphql.user.username;
          this.user_image = res.graphql.user.profile_pic_url;
      });
    });
  }

  openId(){
    console.log("openId")

    window.open(`https://www.instagram.com/${this.user_id}/`,'_blank')
  }

}
