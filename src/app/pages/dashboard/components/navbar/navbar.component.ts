import { Component, OnInit, ElementRef } from '@angular/core';
import { NavbarItem } from '../../models/navbar-item';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-navbar',
  inputs: ['navItems', 'iconWidth'],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private navItems: Array<NavbarItem> = [];

  constructor(private navService: NavService) {

  }

  ngOnInit() {
  }

  navOnDbClick(item, event) {
    event.stopPropagation();
    this.unselectAll();
    if (item.dockmenus && item.dockmenus.length > 0) {
      this.navService.actionDock(item.dockmenus);
    }
    if (item.submenus && item.submenus.length > 0) {
      this.navService.actionWindow(item);
    }
    item.selected = true;
  }

  navOnClick(item, event) {
    event.stopPropagation();
    if (item.dockmenus && item.dockmenus.length > 0) {
      this.navService.actionDock(item.dockmenus);
    }
  }

  private unselectAll() {
    this.navItems.forEach((item) => {
      item.selected = false;
    });
  }

}
