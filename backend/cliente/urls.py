from django.urls import path
from .views import UserView

urlpatterns = [
    path('data/', UserView.as_view(), name='cliente_data')
]