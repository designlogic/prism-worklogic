import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public showSubMenu: boolean = false;

  public selectedMenuItem?: MenuItem;

  public subMenuItems: string[] = [];

  public menuItems: MenuItem[] = [

    {
      Name: "Home", Icon: "fa-home", Children: [
        { Name: "Home sub 1" },
        { Name: "Home sub 2" },
        { Name: "Home sub 3" },
      ]
    },
    {
      Name: "Clients", Icon: "fa-users", Children: [
        { Name: "Overview" },
        { Name: "Client Details" },
        { Name: "New Client Dashboard" },
        { Name: "Inovices" },
      ]
    },
    {
      Name: "Performance", Icon: "fa-table", Children: [
        { Name: "Performance sub 1" },
        { Name: "Performance sub 2" },
        { Name: "Performance sub 3" },
      ]
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  showSubMenuItem(menuItem: MenuItem): void {

    this.menuItems.forEach(item => item.IsActive = false);

    if (menuItem === this.selectedMenuItem) {
      this.hideSubMenu();
      return;
    }

    this.selectedMenuItem = menuItem;
    menuItem.IsActive = true;

    this.showSubMenu = true;
  }

  hideSubMenu(): void {
    this.selectedMenuItem = undefined;
    this.showSubMenu = false;
  }


}



