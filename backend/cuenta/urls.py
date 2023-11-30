from django.urls import path
from .views import CuentaView, TarjetaCreditoView, TarjetaDebitoView, TransferenciaView

urlpatterns = [
    path('data/', CuentaView.as_view(), name='cuenta_data'),
    path('tarjeta/credito/<int:customer_id>', TarjetaCreditoView.as_view(), name='credito_data_specific'),
    path('tarjeta/debito/<int:customer_id>', TarjetaDebitoView.as_view(), name='debito_data_specific'),
    path('tarjeta/credito/', TarjetaCreditoView.as_view(), name='credito_data'),
    path('tarjeta/debito/', TarjetaDebitoView.as_view(), name='debito_data'),
    path('transferencia/', TransferenciaView.as_view(), name='transfer_data'),
]