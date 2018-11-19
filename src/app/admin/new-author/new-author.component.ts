import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author = new Author();
  authorForm = new FormGroup({
    'name': new FormControl(this.author.name, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  constructor(private authorService: AuthorService, private route: Router) { }

  ngOnInit() {
  }

  get name() { return this.authorForm.get('name'); }

  onSubmit() {
    if (this.authorForm.valid) {
      this.authorService.postAuthor(this.authorForm.value).subscribe(
        () => {
          this.route.navigate(['']);
        }, err => {
          console.log(err);
        }
      );
    }
  }
}
