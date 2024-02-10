import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'bases';
  numero:number = 10;
  base:number =5;

  // sumar(){
  //   this.numero = this.numero + 1;
  // }

  // restar(){
  //   this.numero = this.numero - 1;
  // }

  acumular(valor:number){
    if(valor===1){
      this.base+=5;
    }else{
      this.base-=5;
    }
  }
}
