
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Session } from '../beans';

@Injectable({
  providedIn: 'root'
})
export class ServicefirebaseService {

  private dbPath = '/sessions'

  sessionsRef: AngularFirestoreCollection<Session>;

  constructor(private db: AngularFirestore) {
    this.sessionsRef = this.db.collection(this.dbPath);
  }


  creerSession(session: Session): void {
    this.sessionsRef.add({ ...session });
  }

  modfierSession(id: string, session: any): Promise<void> {
    return this.sessionsRef.doc(id).update(session);
  }

  supprimerSession(id: string): Promise<void> {
    return this.sessionsRef.doc(id).delete();
  }

  listerLesSessions(): AngularFirestoreCollection<Session> {
    return this.sessionsRef;
  }

  toutSupprimer() {
    this.sessionsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

}
