from django.shortcuts import render, HttpResponse
from .models import project
# Create your views here.


def home(request):
    project.objects.all()
    return render(request, "myapp/home.html", {'projects' : projects})
    
def about(request):
    return render(request, "myapp/about.html")
