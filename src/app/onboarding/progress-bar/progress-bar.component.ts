import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  public progressBarItens: Array<string> = ["Início", "Documentos", "Dados cadastrais", "Admissão"]

  constructor() { }

  ngOnInit(): void {
  }

}
