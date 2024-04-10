from rest_framework import serializers
from api.models import Company

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    salary = serializers.IntegerField()
    name = serializers.CharField()

