import {Personne} from "../Personnes/Personne";
import {SalleReunion} from "../Salles/SalleReunion";

export interface ReservationSalle{
  id:number;
  dateDebut:Date;
  dateFin:Date;
  description:string;
  heureDebut:string;
  heureFin:string;
  nbrJourReserve:string;
  personneplanifie:Personne;
  personneinviter:Personne;
  sallereunion:SalleReunion;
}
