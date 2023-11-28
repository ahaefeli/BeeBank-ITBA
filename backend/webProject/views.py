from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.urls import reverse

@login_required
def home(request):
    context = {
        'show_branches_url': reverse('show_branches'),
        'cliente_data_url': reverse('cliente_data'),
        'cuenta_data_url': reverse('cuenta_data'),
        'prestamo_data_url': reverse('prestamo_data'),
        'loans_branches_url':'/sucursal/prestamo/<int>',
        }
    return render(request, 'webProject/home.html', context)
