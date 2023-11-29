from django.urls import path
from .views import PrestamoView, PrestamoEmpleadoView, PrestamoEmpleadoDeleteView

urlpatterns = [
    path('data/', PrestamoView.as_view(), name='prestamo_data'),
    path('cliente/<int:customer_id>', PrestamoEmpleadoView.as_view(), name='prestamo_empleado_data'),
    path('cliente/delete/<int:loan_id>', PrestamoEmpleadoDeleteView.as_view(), name='prestamo_empleado_delete_data'),
]