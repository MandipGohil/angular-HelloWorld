import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  
  //This is the input parameter
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //This will use the data into the same Component
  showAlert(data: Product) {
    window.alert('You clicked Notify me button for product: ' + data.id);
  }

  //Noe if we want to pass the data to parent component
  //we need to import [output, EventEmitter]
  //
}
