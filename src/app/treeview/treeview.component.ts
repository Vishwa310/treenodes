import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {
  @Input('data') items;
  @Input('key') key: string;
  cleanArray: any[];

  constructor() { }
  expanded = new Set();

  ngOnInit(): void {
    this.sortarr(this.items);
  }
  sortarr(obj) {
    for (let o in obj) {
      if (!!obj[o] && !!obj[o].values && typeof (obj[o] === 'object')) {
        if (obj[0].values?.length > 0) {
          obj[o].values = obj[o].values.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          this.sortarr(obj[o].values);
        }
      }
    }
  }

  toggle(evt: Event, id) {
    this.expanded.has(id) ? this.expanded.delete(id) : !this.expanded.add(id);
    evt.stopPropagation();
  }
  expandAll() {
    this.expanded = new Set();
    this.getNames(this.items);
  }
  getNames(obj) {
    for (let i in obj) {
      if (!!obj[i] && typeof (obj[i]) == "object") {
        this.getNames(obj[i]);
      } else {
        if (i == 'name') {
          this.expanded.add(obj[i]);
        }
      }
    }
  }

  collapseAll() {
    this.expanded = new Set();
  }
}
