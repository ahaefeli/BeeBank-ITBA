from django.shortcuts import render, HttpResponse

# Create your views here.
def main_login(request):
    raw_html = 'Login Page'
    return HttpResponse(raw_html)