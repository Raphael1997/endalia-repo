import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]) {
    const isLogger = localStorage.getItem('userLog')
    if (isLogger) { return true; }
    this.router.navigateByUrl("/auth/login");
    return false;
  }

}
