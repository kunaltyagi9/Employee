import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  disp1 : boolean = true;
  disp2 : boolean = false;
  disp6 : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle6(){
    this.disp1 = !this.disp1;
    this.disp6 = !this.disp6;
  }
  
  toggle1(){
    this.disp1 = !this.disp1;
    this.disp2 = !this.disp2;
  }
}
