from django.urls import path
from .views import CuentaView,CuentaViewDetail, CuentaViewDetailUpdate, CuentaViewDetailCBU, CuentaViewDetailAlias, CuentaViewDetailMain,TarjetaCreditoView, TarjetaDebitoView, TransferenciaView, TransferenciaViewDetail

urlpatterns = [
    path('data/', CuentaView.as_view(), name='cuenta_data'),
    path('data/<int:customer_id>', CuentaViewDetail.as_view(), name='cuenta_data_specific'),
    path('data/<int:customer_id>/<int:account_id>', CuentaViewDetailUpdate.as_view(), name='cuenta_data_specific_update'),
    path('cbu/<str:account_cbu>', CuentaViewDetailCBU.as_view(),name='cuenta_data_specific_cbu'),
    path('alias/<str:account_alias>', CuentaViewDetailAlias.as_view(),name='cuenta_data_specific_alias'),
    path('data/main/<int:customer_id>', CuentaViewDetailMain.as_view(), name='cuenta_data_specific_main'),
    path('tarjeta/credito/<int:customer_id>', TarjetaCreditoView.as_view(), name='credito_data_specific'),
    path('tarjeta/debito/<int:customer_id>', TarjetaDebitoView.as_view(), name='debito_data_specific'),
    path('tarjeta/credito/', TarjetaCreditoView.as_view(), name='credito_data'),
    path('tarjeta/debito/', TarjetaDebitoView.as_view(), name='debito_data'),
    path('transferencia/', TransferenciaView.as_view(), name='transfer_data'),
    path('transferencia/<int:customer_id>', TransferenciaViewDetail.as_view(), name='transfer_data_specific'),
]