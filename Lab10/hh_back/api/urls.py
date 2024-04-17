from api.views import RUDCompany, CRCompany, getVacancyListByCompany, VacancyCR, VacancyUD
from django.urls import path

urlpatterns = [
    path('companies', CRCompany),
    path('companies/<int:id>', RUDCompany),
    path('companies/<int:id>/vacancies', getVacancyListByCompany),
    path('vacancies', VacancyCR.as_view()),
    path('vacancies/<int:pk>', VacancyUD.as_view())
]


