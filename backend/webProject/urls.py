from django.contrib import admin
from django.urls import path, include
from .views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('sucursal/', include('sucursal.urls')),
    path('cliente/', include('cliente.urls')),
    path('cuenta/', include('cuenta.urls')),
    path('prestamo/', include('prestamo.urls')),
]