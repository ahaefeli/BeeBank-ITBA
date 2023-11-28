from .views import SucursalesView, PrestamosSucursalesView
from django.urls import path

urlpatterns = [
    path('show/', SucursalesView.as_view(), name="show_branches"),
    path('prestamo/<int:pk>/', PrestamosSucursalesView.as_view(), name="loans_branches"),
]