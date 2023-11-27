from django.contrib import admin
from .models import Prestamo, PrestamosPermitidos, Cliente, Cuenta, AuditoriaCuenta

models = [
    Prestamo,
    PrestamosPermitidos,
    Cliente,
    Cuenta,
    AuditoriaCuenta,
]
for model in models:
    admin.site.register(model)