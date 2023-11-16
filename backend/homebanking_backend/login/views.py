from django.shortcuts import render
from .form import formaLogin
# Create your views here.
def login(request):
    return render(request,"login/login.html",{"formaLogin":formaLogin})