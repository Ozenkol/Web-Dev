from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>', views.ProductListUpdateDestroy.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>', views.CategoryListUpdateDestroy.as_view()),
    path('categories/<int:pk>/products', views.ProductListCategory.as_view())
]
