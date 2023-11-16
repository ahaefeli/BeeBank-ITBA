from django.shortcuts import render,redirect
from django.urls import reverse
from django_app.models import Cliente
from django_app.models import Cuenta
# Create your views here.

def home(request):
    clientId = request.session.pop("clientId",None)

    if clientId != None:
        clientData = Cliente.objects.filter(customer_id=clientId)
        clientCuentaData = Cuenta.objects.filter(account_id=clientId)
        return render(request,"home/home.html",{"clientData":clientData,"clientCuentaData":clientCuentaData})
    else:
        return redirect(reverse('Inicio'))
    