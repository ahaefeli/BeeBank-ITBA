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
        'loans_branches_url':'/sucursal/prestamo/<branch_id>',
        'credito_data_url':'/cuenta/tarjeta/credito/<customer_id>',
        'debito_data_url':'/cuenta/tarjeta/debito/<customer_id>',
        'prestamo_cliente_editar_data_url':'/prestamo/cliente/delete/<loan_id>',
        'prestamo_cliente_data_url':'/prestamo/cliente/<customer_id>',
        'direccion_data_url':'/cliente/direccion/<address_id>'
        }
    return render(request, 'webProject/home.html', context)