import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome = 'Crickkin';

  constructor(public alertController: AlertController) {}

  async mostrarNome() {
    const alerta =  await this.alertController.create({
      header: 'Aviso',
      message: 'Você foi avisado, ' + this.nome,
      buttons: ['Ok', 'Não Ok']
    });
    await alerta.present();
    this.nome = '';
  }

}
