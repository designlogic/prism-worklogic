import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public gridMenuItems: MenuItem[] = [

    { Name: "Calendar", Icon: "fa-calendar" },
    { Name: "User App", Icon: "fa-user" },
    { Name: "Management", Icon: "fa-address-book" },
    { Name: "Settings", Icon: "fa-gear" },
    
  ];

  constructor() { }
  
  @Input() notificationCount: number = 0;
  
  ngOnInit(): void {
  }

}
