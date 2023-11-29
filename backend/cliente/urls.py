from django.urls import path
from .views import UserView, DireccionEditarView

urlpatterns = [
    path('data/', UserView.as_view(), name='cliente_data'),
    path('direccion/<int:address_id>', DireccionEditarView.as_view(), name='direccion_data'),
]