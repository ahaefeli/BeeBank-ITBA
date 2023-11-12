from django.contrib import admin
from django.urls import path

from login.views import main_login
from landing.views import home_unlogged, faq_unlogged, contact_unlogged
urlpatterns = [
    path('login/', main_login, name='login'),
    path('', home_unlogged, name='login'),
    path('faq/', faq_unlogged, name='login'),
    path('contact/', contact_unlogged, name='login'),
    path('admin/', admin.site.urls),
]
