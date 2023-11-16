from django.shortcuts import render

# Create your views here.
def transfers(request):
    return render(request,"transfers/transfers.html")