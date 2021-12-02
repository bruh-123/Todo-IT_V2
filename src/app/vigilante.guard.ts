import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateUserService } from './services/validate-user.service';


@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  constructor(private router: Router, private validate: ValidateUserService) {}
  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['login']);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loged = this.validate.check()
    this.redirect(loged);
    return true;
  }
}
