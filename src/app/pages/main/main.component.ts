import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public form: FormGroup;

  constructor() {}

  initializeForm() {
    this.form = new FormGroup({
      token: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
