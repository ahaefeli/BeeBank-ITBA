
from django.shortcuts import render

# Create your views here.
def support(request):
    return render(request,"support/support.html")