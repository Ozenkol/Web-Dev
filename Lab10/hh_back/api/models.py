from django.db import models
from django.forms import ModelForm

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=50, null=True)
    description = models.TextField(null=True)
    city = models.CharField(max_length=50)
    address = models.TextField(null=True)

    def __str__(self):
        return self.name


    class Meta():
        verbose_name_plural = "Companies"
            

class Vacancy(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta():
        verbose_name_plural = "Vacancies"

class CompanyForm(ModelForm):
    class Meta:
        model = Company
        fields = ["name", "description", "city", "address"]

