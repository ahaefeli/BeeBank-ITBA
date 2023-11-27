from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def home(request):
    context = {}
    return render(request, 'webProject/home.html', context)