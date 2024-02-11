import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../entities/entity';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  findAll():Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}

  /* Defaultta httpClientta olan fonksiyonlar:

findAll():Post[]{
  return[]
}
findById(id:number):Post{
  return{}
}
add():boolean{
  return false;
}
update():boolean{
  return false;
}
delete():boolean{
  return false;
}
*/
