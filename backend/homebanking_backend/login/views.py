from django.shortcuts import render,redirect
from django.urls import reverse

from .form import formaLogin
from django_app.models import Cliente
# Create your views here.
def login(request):
    fLogin = formaLogin()

    if request.method=="POST":
        fLogin = formaLogin(request.POST)

        if fLogin.is_valid():
            name = fLogin.cleaned_data["nombre"]
            password = fLogin.cleaned_data["contraseña"]

            if Cliente.objects.filter(customer_name=name).exists() and Cliente.objects.filter(customer_password=password).exists():
                request.session["clientId"] = (Cliente.objects.filter(customer_name=name).first()).customer_id
                return redirect(reverse('Home'))
            else:
                return redirect(reverse('Login')+"?usrnf")

    return render(request,"login/login.html",{"formaLogin":fLogin})