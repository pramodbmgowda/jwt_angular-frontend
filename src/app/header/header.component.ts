import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ){}

  public isLogedIn(){
    return this.userAuthService.isLoggedIn();
  }
  public logout(){
     this.userAuthService.clear();
     this.router.navigate(['/home']);
  }
  
  
}