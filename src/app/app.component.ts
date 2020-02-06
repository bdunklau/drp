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
  title = 'DRP';


  // always unsubscribe
  ngOnDestroy() {
  }


}
