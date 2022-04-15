import { ValueService } from './../value.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any

  constructor(private valueServices:ValueService) {
    valueServices.GetValues().subscribe(response=>{
      this.values= response;
      
    });
   }

  ngOnInit(): void {
  }

}
