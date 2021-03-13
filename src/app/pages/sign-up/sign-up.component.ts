import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  forms: FormGroup;
  hide = true;
  constructor(private authService: AuthService) {
    this.forms = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    const user = {
      username: 'shifdta',
      password: 'shifta2016',
      email: 'shifddta@gmail.com',
      firstname: 'shi',
      lastname: 'john',
    };
    this.authService.signUp(user).subscribe(({ data }) => console.log(data));
  }

  signUp() {}
}
