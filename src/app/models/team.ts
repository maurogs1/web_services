export class Team {
  id: number;
  abbreviation: string;
  city: string;
  division: string;
  full_name: string;
  name: string;
  constructor(id?: number, abbreviation?: string, city?: string, division?: string,
 full_name?: string, name?: string) {
      this.id = id;
      this.abbreviation = abbreviation;
      this.city = city;
      this.division = division;
      this.full_name = full_name;
      this.name = name;
  }
}
