import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.css']
})


export class ProductItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
      this.form = new FormGroup({
        line: new FormControl('Movies'),
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: new FormControl(''),
        year: new FormControl('', this.yearValidator),
      });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(productItem) {
    console.log(productItem);
  }

}
