import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 borrado:string='';

  heroes:string[] =['Spiderman','Ironman','Hulk','Thor','Vito'];

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.borrado = heroeBorrado;
    console.log(heroeBorrado);
  }

}
