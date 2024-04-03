from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 200, blank = True, null = True)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Categories'
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Product(models.Model):
    name = models.CharField(max_length = 200)
    price = models.FloatField(blank = True, null = True)
    description = models.TextField(blank = True, null = True)
    count = models.IntegerField(blank = True, null = True)
    is_active = models.BooleanField(blank = True, null = True)
    category = models.ForeignKey(Category, related_name = 'products', on_delete = models.CASCADE, blank = True)
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category
        }

