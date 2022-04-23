import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  movieId: string;
  movie;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://www.episodate.com/api/show-details?q=' + this.movieId).subscribe(response => this.movie = response);
  }
  }
