from django.http import JsonResponse
from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.
class ProductList(generics.ListAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        return Product.objects.all()

class ProductListUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        user = self.request.user
        print('This', user)
        print('This', user.id)
        return Product.objects.filter(id = user.id)
    
class CategoryList(generics.ListAPIView):
    serializer_class = CategorySerializer
    
    def get_queryset(self):
        return Category.objects.all()

class CategoryListUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    
    def get_queryset(self):
        id = self.request.user.id
        return Category.objects.filter(id = id)

class ProductListCategory(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        id = self.request.user.id
        return Product.objects.filter(category_id = id)


