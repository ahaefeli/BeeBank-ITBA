from django.urls import path
from .views import UserList, DireccionEditarView, UserListDetail

urlpatterns = [
    path('direccion/<int:address_id>', DireccionEditarView.as_view(), name='direccion_data'),
    path("api/users/",UserList.as_view(),name="user_list"),
    path("api/users/<int:pk>",UserListDetail.as_view(),name="user_detail"),
]