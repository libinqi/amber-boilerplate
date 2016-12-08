import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavbarItem, NavbarSubItem } from '../models/narbar-item';
import { DockItem } from '../models/dock-item';

@Injectable()
export class NavService {
    // Observable DockItem[] sources
    public dockActionSource = new Subject<DockItem[]>();
    // Observable DockItem[] streams
    public dockAction$ = this.dockActionSource.asObservable();

    // Observable Window sources
    public windowActionSource = new Subject<any>();
    // Observable Window streams
    public windowAction$ = this.windowActionSource.asObservable();

    constructor() {
    }

    actionDock(dockItems: DockItem[]) {
        this.dockActionSource.next(dockItems);
    }

    actionWindow(win: any) {
        this.windowActionSource.next(win);
    }
}