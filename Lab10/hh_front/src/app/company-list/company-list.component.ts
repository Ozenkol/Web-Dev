import { Component, OnInit } from '@angular/core';
import { ApiService, Company } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies !: Company[]
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
      this.fetchData()
  }
  getListCompany() {
    this.apiService.getListCompany().subscribe(
      data => this.companies = data
    )
  }
  fetchData() {
    this.apiService.getListCompany().subscribe(
      data => {this.companies = data}
    )
  }
  deleteCompany(id: number) {
    this.apiService.deleteCompany(id).subscribe(
      () => {this.fetchData()}
    )
    this.companies = this.companies.filter(
      company => company.id != id
    )
  }
}
