from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(AuthUser)
admin.site.register(Cards)
admin.site.register(Cliente)
admin.site.register(AuditoriaCuenta)
admin.site.register(PrestamosPermitidos)
