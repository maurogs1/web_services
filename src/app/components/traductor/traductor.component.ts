import { Component, OnInit } from '@angular/core';
import { Traductor } from '../../models/traductor';
import { TraductorService } from '../../services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  traductores: Array<Traductor>;
  traductor: Traductor;
  opcion: string;
  bandera: boolean = false;
  
    constructor(private traductorService: TraductorService) {
  
      this.traductor = new Traductor();
      this.traductores = new Array<Traductor>();
  
    }
  
    ngOnInit() {
  
    }
  
  pasarOpciomes(){
    if(this.opcion == "Español-Inglés" ){
      this.traductor.source = "es";
      this.traductor.target = "en";
    }
    if(this.opcion == "Inglés-Español" ){
      this.traductor.source = "en";
      this.traductor.target = "es";
    }
    if(this.opcion == "Español-Portugués" ){
      this.traductor.source = "es";
      this.traductor.target = "pt";
    }
  }
  
    public traducirTexto(){
  
      this.traductorService.traducir(  this.traductor.source,  this.traductor.target,  this.traductor.input )
      .subscribe(datos =>  {
        this.traductores = datos['outputs'];
        console.log(this.traductores[0].output,"final");
        this.bandera = true;
      })
  
  
    }
  
    borrar(){
      this.opcion = "null";
      this.traductor = new Traductor();
      this.bandera = false;
    }
  
  
    listaIdiomas = [ 'Español-Inglés', 'Inglés-Español', 'Español-Portugués']
  
    }