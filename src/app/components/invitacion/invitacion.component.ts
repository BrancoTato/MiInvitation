import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-invitacion',
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrl: './invitacion.component.css',
})
export class InvitacionComponent {
  aceptado = false;
  btnNoStyle = { top: '50%', left: '50%' };

  numeroWhatsApp = '51948315154';
  enviarWhatsApp() {
    this.aceptado = true;
    const mensaje = encodeURIComponent(
      '💖 ¡Estimado Dann , si quiero salir ! 🎉🥰'
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${this.numeroWhatsApp}&text=${mensaje}`,
      '_blank'
    );
  }

  moverBoton() {
    const x = Math.random() * 80 + 10; // Posición aleatoria entre 10% y 90%
    const y = Math.random() * 80 + 10;
    this.btnNoStyle = { top: `${y}%`, left: `${x}%` };
  }

  aceptar() {
    this.aceptado = true;
  }
}
