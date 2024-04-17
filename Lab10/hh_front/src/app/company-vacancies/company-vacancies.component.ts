import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-vacancies.component.html',
  styleUrl: './company-vacancies.component.css'
})
export class CompanyVacanciesComponent implements OnInit {
  vacancies!: Vacancy[]

  ngOnInit(): void {
      this.getVacancy()
  }

  constructor(private http: ApiService, private route: ActivatedRoute) {}
  getVacancy() {
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('companyId'));  
    console.log(companyIdFromRoute)
    this.http.getListVacancy(companyIdFromRoute).subscribe(
      data => this.vacancies = data
    )
  }

}
