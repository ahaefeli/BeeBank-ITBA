from .views import ShowBranchesView
from django.urls import path

urlpatterns = [
    path('sucursales/', ShowBranchesView.as_view(), name="show_branches")
]