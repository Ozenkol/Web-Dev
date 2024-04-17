import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlRoot = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { 

  }
  getListCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.urlRoot.concat("companies"))
  }
  deleteCompany(id: number) {
    return this.http.delete(this.urlRoot.concat("companies/"+id))
  }
  getListVacancy(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.urlRoot.concat("companies/"+id+"/vacancies"))
  }

}
