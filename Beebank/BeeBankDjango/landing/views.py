from django.shortcuts import render, HttpResponse

# Create your views here.
def home_unlogged(request):
    raw_html = 'Home Page'
    return HttpResponse(raw_html)

def faq_unlogged(request):
    raw_html = 'FAQ Page'
    return HttpResponse(raw_html)

def contact_unlogged(request):
    raw_html = 'Contact Page'
    return HttpResponse(raw_html)