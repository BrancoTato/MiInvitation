import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitacionComponent } from './components/invitacion/invitacion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvitacionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invitacion-app';
}
