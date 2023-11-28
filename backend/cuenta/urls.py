from django.urls import path
from .views import CuentaView

urlpatterns = [
    path('data/', CuentaView.as_view(), name='cuenta_data')
]