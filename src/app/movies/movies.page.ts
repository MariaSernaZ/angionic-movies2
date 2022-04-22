import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies=[]

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(){
    this.http.get<any>('https://www.episodate.com/api/most-popular?page=1').subscribe(response =>{
      console.log(response);
      this.movies = response.tv_shows;
    })
  }

}
