import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
 
  @Input('cityInput')  cityInput = "soy input de ciudad ";
  constructor() { }

  ngOnInit(): void {
  }

}
