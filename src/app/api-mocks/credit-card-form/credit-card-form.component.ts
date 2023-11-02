import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.cardForm = this.fb.group({
      number: ['', [Validators.required]],
      cvv: ['', Validators.required],
      expiryDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const formData = this.cardForm.value;
      this.http.post('http://localhost:8080/api/card/check',formData)
      .subscribe((response) => {
        console.log('API response:', response);
        window.alert("Yay! You're card is approved!");
      }, (error) => {
        console.error('API error:', error);
        window.alert("Oh...Check your card's details and try again.");
      });
    }
  }
}
