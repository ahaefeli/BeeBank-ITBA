from django.urls import path
from .views import PrestamoView

urlpatterns = [
    path('data/', PrestamoView.as_view(), name='prestamo_data')
]