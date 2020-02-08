import { Component, Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Road Pricing';


  // https://www.w3schools.com/howto/howto_js_sidenav.asp
  /* Set the width of the side navigation to 250px */
  openNav(event) {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("thebody").addEventListener('click', this.closeNav, true);
    // document.body.addEventListener('click', this.fn, true);
    // document.body.addEventListener('click', function() {window.alert('body clicked')})
  }

  // https://www.w3schools.com/howto/howto_js_sidenav.asp
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("thebody").removeEventListener('click', this.closeNav);
  }

}
