import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  costumers: any;

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get("https://localhost:7090/api/Customers")
    .subscribe({
      next: (result: any) => this.costumers = result,
      error: (err: HttpErrorResponse) => console.log(err)
    })

  }

}
