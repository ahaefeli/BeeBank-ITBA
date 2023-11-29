from django.contrib import admin
from django.urls import path, include
from .views import home
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('favicon.ico/', lambda x: HttpResponse(status=204)),
    path('', home, name='home'),
    path('sucursal/', include('sucursal.urls')),
    path('cliente/', include('cliente.urls')),
    path('cuenta/', include('cuenta.urls')),
    path('prestamo/', include('prestamo.urls')),
]