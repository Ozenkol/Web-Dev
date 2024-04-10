from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics

from api.models import Company, Vacancy
from api.serializers import *

# Create your views here.
class CompanyAPIView(generics.ListAPIView):
    def get(self, request):
        companies = Company.objects.all()
        serializers = CompanySerializer(companies, many = True)
        return JsonResponse(serializers.data, safe=False)

class CompanyDetailAPIView(generics.ListAPIView):
    def get(self, request, pk):
        try:
            company = Company.objects.get(id=pk)
            serializers = CompanySerializer(company)
            return JsonResponse(serializers.data)
        except Company.DoesNotExist as e:
            return JsonResponse({"error": str(e)}, status=400)
        
class VacancyCompanyAPIView(generics.ListAPIView):
    def get(self, request, pk):
        try:
            vacancy = Vacancy.objects.all().filter(company_id = pk)
            serializers = VacancySerializer(vacancy, many=True)
            return JsonResponse(serializers.data, safe=False)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)}, status=400)

class VacancyAPIView(generics.ListAPIView):
    def get(self, request):
        vanancies = Vacancy.objects.all()
        serializers = VacancySerializer(vanancies, many = True)
        return JsonResponse(serializers.data, safe=False)
    
class VanancyDetailAPIView(generics.ListAPIView):
    def get(self, request, pk):
        try:
            vanancy = Vacancy.objects.get(id=pk)
            serializers = VacancySerializer(vanancy)
            return JsonResponse(serializers.data)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)}, status=400)
    
class VacancyTopTenAPIView(generics.ListAPIView):
    def get(self, request):
        try:
            vacancies = Vacancy.objects.all().order_by('-salary')[:10]
            serializers = VacancySerializer(vacancies, many=True)
            return JsonResponse(serializers.data, safe=False)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)}, status=400)

