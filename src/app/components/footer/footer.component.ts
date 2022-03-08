import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  urlGithub = 'https://github.com/MickHerbivore';
  urlTwitter = 'https://twitter.com/mickherbivore';
  urlInstagram = 'https://www.instagram.com/mickherbivore';

  constructor() { }

  ngOnInit(): void {
  }

}
