import { User } from './../../_model/User';
import { Component, Input, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/nav/nav.component';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent implements OnInit {

@Input() user :User;
  constructor() { }

  ngOnInit(): void {

  }

}
