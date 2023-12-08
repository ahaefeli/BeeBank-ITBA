from django.urls import path
from .views import PrestamoView, PrestamoEmpleadoView, PrestamoEmpleadoDeleteView, PrestamoPermitidoView, PrestamoPermitidoDeleteView

urlpatterns = [
    path('data/<int:branch_id>', PrestamoView.as_view(), name='prestamo_data'),
    path('cliente/<int:customer_id>', PrestamoEmpleadoView.as_view(), name='prestamo_empleado_data'),
    path('cliente/permitido/<int:customer_id>', PrestamoPermitidoView.as_view(), name='prestamo_empleado_data'),
    path('cliente/permitido/delete/<int:loan_id>', PrestamoPermitidoDeleteView.as_view(), name='prestamo_empleado_data'),
    path('cliente/delete/<int:loan_id>', PrestamoEmpleadoDeleteView.as_view(), name='prestamo_empleado_delete_data'),
]