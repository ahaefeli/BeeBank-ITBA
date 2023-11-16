from django.shortcuts import render

# Create your views here.
def initPage(request):
    return render(request,"initPage/initPage.html")