

export class Conversor {

    cantidad: number = 1;
    from: string;
    to: string;;
    q: number = 1;

    constructor(cantidad?: number, from?: string, to?: string){
        this.cantidad = cantidad;
        this.from = from;
        this.to = to;
    }

}

