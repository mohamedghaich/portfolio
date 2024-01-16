import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderVisible = true;
  asidevisible=false;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.isHeaderVisible = currentScrollPos <= this.prevScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
  active(){
  this.asidevisible=true;
  }
  deactive(){
    this.asidevisible=false;
  }
}
