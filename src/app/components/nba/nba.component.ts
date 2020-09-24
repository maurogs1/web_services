import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { NbaService } from '../../services/nba.service';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {


  ngOnInit() {
    this.cargarTeams();
    this.cargarJugadores();
  }

  busquedaJugadores: string = "";
  teams:Array<Team>;
  team:Team;
  player: Player;
  players: Array<Player>;
  playersTeams: Array<Player>;
  ocultarTeam: boolean = false;
  ocultarJugador: boolean = false;
  encontrado: boolean = false;

  constructor(private nbaService:NbaService) {
    this.team = new Team();
    this.player = new Player();
    this.playersTeams = new Array<Player>();

 }
  cargarTeams(){
  this.nbaService.getTeams().subscribe(
  (result) => {
  this.teams = new Array<Team>();
  result['data'].forEach(element => {
  this.team = new Team();
  Object.assign(this.team,element);
  this.teams.push(this.team);
  });
  console.log(this.teams);
  },
  error => { alert("Error en la petición"); } )
  }

cargarJugadores(){
   //lo que viene en el observable es un array
   this.nbaService.getJugadores().subscribe(
    (result) => {
    this.players = new Array<Player>();
    result['data'].forEach(element => {
    this.player = new Player();
    Object.assign(this.player,element);
    this.players.push(this.player);
    });
    console.log(this.players);
    },
    error => { alert("Error en la petición"); } )
    }

    buscarJugadores(){
      this.encontrado = false;
      this.playersTeams = new Array<Player>();
         var j = 0;
          for(var i = 0; i < this.players.length; i++){
           if(this.busquedaJugadores.toLowerCase() == this.players[i].team.name.toLowerCase() ){
               this.playersTeams[j] = this.players[i];
               j++;
              this.encontrado = true;
           }
          }
    }

    ocultarTeams(){
     this.ocultarTeam = true;
    }
    mostrarTeams(){
      this.ocultarTeam = false;
    }
    ocultarPlayers(){
      this.ocultarJugador = true;
    }
    mostrarPlayers(){
      this.ocultarJugador = false;
    }
}
