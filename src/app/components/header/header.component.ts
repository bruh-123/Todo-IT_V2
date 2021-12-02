import { Component, OnInit } from '@angular/core';
import { ValidateUserService } from '../../services/validate-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoged = this.validate.check();
  constructor(private validate:ValidateUserService) { }
  signOut() {
    localStorage.clear()
  }
  ngOnInit(): void {
  }

}
