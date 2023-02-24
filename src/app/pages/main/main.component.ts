import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  /**
   * It clears the local storage and navigates to the login page.
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }

}
