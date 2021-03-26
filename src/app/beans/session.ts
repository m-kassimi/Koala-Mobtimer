import { Participant } from '.';
import { Pauses } from './pauses';

export class Session {
  id !: string;
  nom!: string;
  groupe!: Array<Participant>;
  pauses !: Pauses;
}
