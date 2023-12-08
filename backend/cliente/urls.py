from django.urls import path
from .views import UserList, DireccionEditarView, UserListDetail, ClienteView, ClienteViewDetail,ClienteRegistroView

urlpatterns = [
    path('direccion/<int:address_id>', DireccionEditarView.as_view(), name='direccion_data'),
    path("api/users/",UserList.as_view(),name="user_list"),
    path("api/users/<int:pk>",UserListDetail.as_view(),name="user_detail"),
    path('api/cliente/',ClienteView.as_view(),name="cliente_view"),
    path('api/cliente/<int:customer_id>',ClienteViewDetail.as_view(),name="cliente_view_specific"),
    path("api/cliente/registro",ClienteRegistroView.as_view(),name="cliente_registro"),
]