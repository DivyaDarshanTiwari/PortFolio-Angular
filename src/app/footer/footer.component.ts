import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

type key_value={
  key:string,
  value:string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatTabsModule,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  readonly email = new FormControl('', [Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  protected entered_or_not=false;
  protected contacting_email:string[] =[];
  protected mail_id: string = "ddarshantiwari@gmail.com";
  protected phone_no :number =  7054396386;
  protected icons:key_value[] = [
    {key: "Github.png", value: "https://github.com/DivyaDarshanTiwari"},
    {key: " LeetCode.webp", value: "https://leetcode.com/u/g5BkYAHUbI/"},
    {key: "linkdin.png", value: "https://www.linkedin.com/in/divya-darshan-tiwari-9b6981240/"}
  ];

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.entered_email();
      this.entered_or_not=true;
    }
  }

  private entered_email(){
    if(this.email.value && !(this.contacting_email.includes(this.email.value))){
      this.contacting_email.push(this.email.value);
      console.log(this.contacting_email);
    }
  }
}

