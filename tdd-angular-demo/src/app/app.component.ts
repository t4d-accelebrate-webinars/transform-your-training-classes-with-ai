import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tdd-angular-demo';

  colors: Color[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }
  
}
