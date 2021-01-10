import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsDbService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore, private snackBar: MatSnackBar) { }

  getPosts() {
    // WARNING: Do not use in production!
    // This returns the whole collection causing too many document reads.
    return this.firestore.collection("posts", (ref) => ref.orderBy("date", "desc")).valueChanges().pipe(
      filter(value => !!value)
    );
  }

  getPostsFromUser(userId) {
    return this.firestore.collection("posts", (ref) => ref.where("author", "==", userId).orderBy("date", "desc")).valueChanges().pipe(
      filter(value => !!value)
    );
  }

  getProfileByNameStartWithStr(str) {
    return this.firestore.collection("profiles", ref => ref
      .where('name', '>=', str)
      .where(
        'name',
        '<',
        str.replace(/.$/, (c) => String.fromCharCode(c.charCodeAt(0) + 1))
      )
      .limit(6)).valueChanges();
  }

  getMyPosts() {
    return this.auth.user.pipe(
      take(1),
      switchMap((user: any) => {
        return this.firestore.collection("posts", (ref) => ref.where("author", "==", user.uid).orderBy("date", "desc")).valueChanges();
      })
    )
  }

  addPost(postInfo) {
    this.auth.user.pipe(
      take(1),
      switchMap((user: any) => {
        return this.firestore.collection("posts").add({
          ...postInfo,
          author: user.uid,
          date: new Date().getTime()
        })
      })
    ).subscribe(() => {
      this.snackBar.open('Posted', null, {
        duration: 2000,
      })
    })
  }


}
