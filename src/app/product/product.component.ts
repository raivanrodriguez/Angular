import { Component, Input } from '@angular/core';
import { product } from '../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() Prod!: product; 
  name = 'Raivan'
}
