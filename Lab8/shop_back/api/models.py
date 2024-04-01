from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(maxlength = 200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

