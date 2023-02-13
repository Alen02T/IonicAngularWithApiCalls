export class Driver {


  driverId: number;
  name: string | null;
  lastname: string | null;
  wins: number;
  country: string | null;
  flag: string | null;
  number: number;
  points: number;
  podiums: number;
  imageDriver:string | null;
  team: number;

  constructor() {
    this.driverId = 0;
    this.name = null;
    this.lastname=null;
    this.wins = 0;
    this.country=null;
    this.flag=null;
    this.number = 0;
    this.points = 0;
    this.podiums = 0;
    this.imageDriver=null;
    this.team = 0;
  }
}
