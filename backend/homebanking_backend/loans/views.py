
from django.shortcuts import render
#from .form import formaloans
# Create your views here.
def loans(request):
    return render(request,"loans/loans.html")