import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
})
export class TrianguloPage implements OnInit {

  base: number = 0;
  altura: number = 0;
  area: number = 0;

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async calcularArea() {
    this.area = (this.base * this.altura) / 2;
    const alerta = await this.alertController.create({
      header: 'Calculo de Área',
      message: 'Área = ' + this.area,
      buttons: ['Ok']
    });
    alerta.present();
  }

}
