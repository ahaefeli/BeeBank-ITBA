from django.shortcuts import render

# Create your views here.
def initPage(request):
    request.session.clear()
    return render(request,"initPage/initPage.html")