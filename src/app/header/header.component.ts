import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
ngOnInit(): void {
}
@Output() toggleSidenavv: EventEmitter<any> = new EventEmitter();
constructor(){}
toggleSidenav(){
  this.toggleSidenavv.emit();
}
}
