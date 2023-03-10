import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isLogger = localStorage.getItem('userLog')
    if (isLogger) { return true; }
    this.router.navigateByUrl("/auth/login");
    return false;
  }

}
