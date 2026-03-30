import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao = [
    {
      tecnologia: 'HTML',
      descricao: 'Linguagem de marcação responsável por organizar e estruturar o conteúdo das páginas web, definindo elementos como textos, imagens, links e seções.'
    },
    {
      tecnologia: 'CSS',
      descricao: 'Responsável pela apresentação visual das páginas, permitindo aplicar estilos, cores, layouts e criar interfaces modernas e responsivas.'
    },
    {
      tecnologia: 'JavaScript',
      descricao: 'Linguagem de programação que adiciona interatividade e dinamismo às páginas, possibilitando a criação de funcionalidades complexas e experiências mais ricas para o usuário.'
    }
  ];
}
