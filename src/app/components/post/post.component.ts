import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../entities/entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  //Dependency Injection
  constructor(private postService: PostService) {}
  posts:Post[]= []
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){ //geriye post listesi dönüyor.
    this.postService.findAll().subscribe(res =>{
      this.posts = res
    },error=>{
      this.posts=[]
    });
  }
}
