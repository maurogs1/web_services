export class Main {
    temp: number;
    pressure: number;
    humity: number;
    temp_max: number;
    temp_min: number;

constructor(temp?: number, pressure?: number, humity?: number, temp_max?: number, temp_min?: number){
    this.temp = temp; 
    this.pressure = pressure;
    this.humity = humity;
    this.temp_max = temp_max;
    this.temp_min = temp_min;
}

}
