import { Main } from './main';

export class Weather {
    id: number;
    name: string;
    main: Main;
    constructor(id?: number, name?: string){
        this.id = id;
        this.name  = name;
        this.main = new Main();
    }
}
