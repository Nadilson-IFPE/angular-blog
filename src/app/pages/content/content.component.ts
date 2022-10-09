import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg';
  contentTitle: string = 'NOTÍCIA EXEMPLO';
  contentDescription: string = 'bla bla bla';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      console.log(value.get('id'));
    });
  }
}
