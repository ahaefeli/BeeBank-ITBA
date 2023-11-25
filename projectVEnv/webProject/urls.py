from django.contrib import admin
from django.urls import path, include

from cliente.views import home, home_logged, new_loan, procesar_prestamo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('cliente/', home_logged, name='home_logged'),
    path('cliente/prestamo', new_loan, name='new_loan'),
    path('cliente/prestamo/solicitar', procesar_prestamo, name='procesar_prestamo'),
    path('cliente/', include('django.contrib.auth.urls'))
]
