import { Team } from './team';

export class Player {
  first_name: string;
  last_name: string;
  team: Team;
  constructor(first_name?: string, last_name?: string){
    this.first_name = first_name;
    this.last_name = last_name;
    this.team = new Team();
  }
}
