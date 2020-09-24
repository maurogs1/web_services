import { Component, OnInit } from "@angular/core";
import { Weather } from "../../models/weather";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-clima",
  templateUrl: "./clima.component.html",
  styleUrls: ["./clima.component.css"],
})
export class ClimaComponent implements OnInit {
  weathers: Array<Weather>;
  weather: Weather;
  ciudad: string;
  rem: string;
  celciusMin: number;
  celciusMax: number;
  constructor(private weatherService: WeatherService) {}

  mostrar() {
    for (var i = 0; i < this.ciudad.length; i++) {
      this.rem = this.ciudad.replace(" ", "+");
      this.ciudad = this.rem;
    }
    this.cargarTiempo();
  }
  //result es lo que tiró el webservice cuando lo consumí
  //es necesario que convierta el JSON que
  cargarTiempo() {
    console.log("El valor es:" + this.rem);
    this.weatherService.getTiempo(this.ciudad).subscribe(
      (result) => {
        this.weathers = new Array<Weather>();
        result["list"].forEach((element) => {
          this.weather = new Weather();
          //object.assign asigna al team el objeto del elemento( si coinciden las propiedades)
          Object.assign(this.weather, element);
          this.weathers.push(this.weather);
        });
      },
      (error) => {
        alert("Error en la petición");
      }
    );
  }

  public cambiarTemperatura() {
    for (var i = 0; i < this.weathers.length; i++) {
      this.weathers[i].main.temp_min = this.weathers[i].main.temp_min - 273.15;
      this.weathers[i].main.temp_max = this.weathers[i].main.temp_max - 273.15;
      console.log(this.weathers[i].main.temp_max, "ssssssssssss");
    }
  }
  ngOnInit() {}
}
