import { Component, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  http = inject(HttpClient); 
  Pro: product[] = []


  ngOnInit(){
    this.http.get<product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data)=>{
      this.Pro = data;
    })
  }
}
