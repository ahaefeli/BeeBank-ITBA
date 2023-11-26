from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Cliente, Cuenta, Prestamo, PrestamosPermitidos, Sucursal, Direccion
from datetime import datetime
from django.contrib import messages

def home(request):
    return render(request, 'home.html')



@login_required
def home_logged(request):
    user_id = request.user.id
    cliente = Cliente.objects.filter(customer_id=user_id).first()
    cuenta_cliente = Cuenta.objects.filter(customer_id=cliente.customer_id).first()
    if cuenta_cliente:
        balance = '{:,}'.format(cuenta_cliente.balance).replace(',','.')
    else:
        balance = "! Sin Autorización"
    prestamos = Prestamo.objects.filter(customer_id=user_id)
    for prestamo in prestamos:
        prestamo.loan_total = '{:,}'.format(prestamo.loan_total).replace('.','@').replace(',','.').replace('@',',')
    context ={
        'usuario':f'{cliente.customer_name} {cliente.customer_surname}',
        'balance':f'{balance}',
        'prestamos':prestamos
    }
    return render(request, 'home_logged.html',context)



@login_required
def new_loan(request):
    user_id = request.user.id
    cliente = Cliente.objects.filter(customer_id=user_id).first()
    prestamos_preaprobados=PrestamosPermitidos.objects.filter(customer_id=user_id)
    
    sucursal = Sucursal.objects.filter(branch_id=cliente.branch_id).first()
    direccion = Direccion.objects.filter(adresss_id=sucursal.address_id).first()
    
    if prestamos_preaprobados:
        for prestamo in prestamos_preaprobados:
            prestamo.loan_total = '{:,}'.format(prestamo.loan_total).replace('.','@').replace(',','.').replace('@',',')
    context = {
        'prestamos_preaprobados':prestamos_preaprobados,
        'sucursal':direccion,
    }
    return render(request, 'loan.html', context)



@login_required
def procesar_prestamo(request):
    success = False
    if request.method == 'POST':
        try:
            user_id = request.user.id
            prestamo_id = request.POST.get('prestamo')
            prestamo_seleccionado = PrestamosPermitidos.objects.get(loan_id=prestamo_id)
            fecha = datetime.now().strftime('%Y-%m-%d')
            nuevo_prestamo = Prestamo(
                loan_type=prestamo_seleccionado.loan_type,
                loan_total=prestamo_seleccionado.loan_total,
                loan_date=fecha,
                customer_id=user_id
            )
            nuevo_prestamo.save()
            prestamo_seleccionado.delete()
            success = True
        except Exception as e:
            success = False
    context ={'success':success}
    return render(request, 'process_loan.html', context)