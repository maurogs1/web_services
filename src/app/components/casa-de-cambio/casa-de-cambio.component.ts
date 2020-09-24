import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../../services/conversor.service';
import { Conversor } from '../../models/conversor';

@Component({
  selector: 'app-casa-de-cambio',
  templateUrl: './casa-de-cambio.component.html',
  styleUrls: ['./casa-de-cambio.component.css']
})
export class CasaDeCambioComponent implements OnInit {
  conversor: Conversor;
  total: number;
  num1: number ;
  resultado: number ;
  habilitar: boolean = false;

  constructor(private conversorService: ConversorService) {
    this.conversor = new Conversor();
  }



  ngOnInit() {
  }




// todas las conversiones que acepta la API
public monedas =  ['ARS','SGD','MYR','EUR','USD','AUD','JPY','CNH','HKD','CAD','INR','DKK','GBP','RUB','NZD','MXN','IDR',
'TWD','THB','VND']


  traerRespuestaAPI(){
    
    this.conversorService.cambiar(this.conversor.cantidad, this.conversor.from, this.conversor.to)
    .subscribe(datos =>  this.num1  = datos * this.total );
    this.habilitar = true;
    return   this.num1;
    
  }


borrar(){
  this.total = 0;
  this.conversor.cantidad = 0;
  this.conversor.from = null;
  this.conversor.to =null;
  this.num1 = null;
  this.resultado = null;
  this.habilitar = false;
}
}