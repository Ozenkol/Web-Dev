import json
from django.shortcuts import render
from api.models import Company, Vacancy, CompanyForm
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views import View
from rest_framework import generics
from api.serializers import VacancySerializer, VacancyModelSerializer

# Create your views here.

#FBV
def CRCompany(request):
    if request.method == "GET":
        values = Company.objects.all().values()
        values = list(values)
        return JsonResponse(values, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company_form = CompanyForm(data)
        if company_form.is_valid():
            company_form.save()
            return HttpResponse("Company added")
        else:
            return HttpResponse(company_form.errors.as_json(), request.POST)

@csrf_exempt
def RUDCompany(request, id):
    try:
        object = Company.objects.get(pk = id)
    except Company.DoesNotExist:
        object = None
    if request.method == "GET":
        data = serializers.serialize('json', [object])
        data = json.loads(data[1:-1])
        return JsonResponse(data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company_form = CompanyForm(data, instance=object)
        if company_form.is_valid():
            company_form.save()
            return HttpResponse("Company updated")
        else:
            return HttpResponse(company_form.errors.as_json(), request.POST, request.data)
    elif request.method == "DELETE":
        if object == None:
            return HttpResponse("None object")
        object.delete()
        return HttpResponse("Deleted")

def getVacancyListByCompany(request, id):
    values = Vacancy.objects.filter(company_id = id).values()
    values = list(values)
    return JsonResponse(values, safe=False)

#CBV
class VacancyCR(generics.ListCreateAPIView):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()

class VacancyUD(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VacancyModelSerializer
    queryset = Vacancy.objects.all()


