from django.shortcuts import render,redirect
from django.urls import reverse
from .form import faqForm
# Create your views here.
def faq(request):
    consultaForm = faqForm

    if request.method == "POST":
        consultaForm = faqForm(data=request.POST)

        if consultaForm.is_valid():
            name = request.POST.get("name","")
            surname = request.POST.get("surname","")
            mail = request.POST.get("mail","")
            content = request.POST.get("content","")
        return redirect(reverse('Faq')+"?ok")
    return render(request,"faq/faq.html",{"faqForm":consultaForm})