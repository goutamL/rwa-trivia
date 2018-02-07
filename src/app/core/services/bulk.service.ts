import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
// AngularFireStorageModule
import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../../model/category';
import { BulkUploadFileInfo, User } from '../../model';

@Injectable()
export class BulkService {

  constructor(private db: AngularFirestore,
              private http: HttpClient) {
  }
  getBulkUpload(): Observable<BulkUploadFileInfo[]> {
    return this.db.collection('/bulk_uploads').valueChanges()
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      });
  }
  getUserBulkUpload(user: User): Observable<BulkUploadFileInfo[]> {
    return this.db.collection('/bulk_uploads', ref => ref.where('created_uid', '==', user.userId))
      .valueChanges()
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      });
    }
}