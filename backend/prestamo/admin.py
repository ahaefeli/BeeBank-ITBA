from django.contrib import admin
from .models import Prestamo, PrestamosPermitidos
models = [
    Prestamo,
    PrestamosPermitidos,
]
for model in models:
    admin.site.register(model)