import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';

export const routes: Routes = [
    {path: "", component: CompanyListComponent},
    {path: ":companyId", component: CompanyVacanciesComponent}
];
