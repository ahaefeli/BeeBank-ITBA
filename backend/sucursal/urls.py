from .views import SucursalesView, PrestamosSucursalesView
from django.urls import path

urlpatterns = [
    path('show/', SucursalesView.as_view(), name="show_branches"),
    path('prestamo/<int:branch_id>/', PrestamosSucursalesView.as_view(), name="loans_branches_specific"),
    path('prestamo/', PrestamosSucursalesView.as_view(), name="loans_branches"),
]