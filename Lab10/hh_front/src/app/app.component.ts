import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService, Company, Vacancy } from './api.service';
import { CommonModule } from '@angular/common';
import { HttpHandler } from '@angular/common/http';
import { CompanyListComponent } from './company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
