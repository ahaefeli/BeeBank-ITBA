from django.shortcuts import render
from .forms import formaAccounts
# Create your views here.
from django.shortcuts import render
from .form import formaLogin
# Create your views here.
def accounts(request):
    return render(request,"accounts/accounts",{"formaAccounts":formaAccounts})