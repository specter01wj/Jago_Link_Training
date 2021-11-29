import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {

  authors = [];

  constructor(service: AuthorsService) { 
  	// let service = new CoursesService();
  	this.authors = service.getAuthors();
  }
  
  ngOnInit() {
  }

}
