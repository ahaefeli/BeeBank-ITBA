from django.contrib import admin
from .models import Cuenta, AuditoriaCuenta

models = [
    AuditoriaCuenta,
    Cuenta,
]
for model in models:
    admin.site.register(model)