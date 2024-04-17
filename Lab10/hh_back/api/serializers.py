from rest_framework import serializers
from api.models import Vacancy

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    
class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'