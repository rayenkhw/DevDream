// application.model.ts

import { LongDateFormatKey } from "moment";

export class  Application {
    id_application: number;
    lettreMotivation: string;
    demandeDeStage: string;
    etat: string;

    etudiant: {
      
    };
    offre: {
        id_offre : number;
      titre : string;
    };
    keyword: {
      
    };
    cv: string;
    
  }
  