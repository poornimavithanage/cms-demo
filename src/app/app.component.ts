import { Component } from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms-demo';
  private roles: string[] | undefined;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | undefined;

  constructor(private tokenStorageService: TokenStorageService) { }


  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // @ts-ignore
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // @ts-ignore
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
