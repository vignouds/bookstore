import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  redirectUrl: string;
  connectError = false;
  loginForm = new FormGroup({
    'name': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('', [
      Validators.required
    ])
  });

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.redirectUrl = this.route.snapshot.paramMap.get('redirect');
   }

  ngOnInit() {
  }

  get name() { return this.loginForm.get['name']; }
  get password() { return this.loginForm.get['password']; }

  onSubmit() {
    if (this.loginForm.valid) {
      const form = this.loginForm.value;
      this.authService.connect(form.name, form.password)
      .subscribe((done: boolean) => {
        if (done) {
            this.router.navigate([ this.redirectUrl || '/admin' ]);
        } else {
          this.connectError = true;
        }
      });
    }
  }

}
