import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  // For the password
  hide = true;
  constructor(fb: FormBuilder, private authService: AuthService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
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
}
