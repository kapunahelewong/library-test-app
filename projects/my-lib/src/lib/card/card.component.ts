import { Component, OnInit, ContentChild } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { LibHeaderToken } from '../header/lib-header-token';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @ContentChild(HeaderComponent) header: HeaderComponent|null = null;
  @ContentChild(LibHeaderToken) header: LibHeaderToken|null = null;

  constructor() { }

  ngOnInit() {
  }

}
