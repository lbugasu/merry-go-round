import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'merry-go-round-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'merry-go-round';
}
