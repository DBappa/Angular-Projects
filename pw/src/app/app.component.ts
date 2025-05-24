import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password='';

  onUseLettersChanged() {
    this.includeLetters=!this.includeLetters;
  }

  onUseNumbersChanged() {
    this.includeNumbers=!this.includeNumbers;
  }

  onUseSymbolsChanged() {
    this.includeSymbols=!this.includeSymbols;
  }
  
  onButtonClick() {
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    this.password = 'Password!!!';
  }

  getPassword() {
    return this.password;
  }
}
