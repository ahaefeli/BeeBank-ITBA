from django.contrib import admin
from django.urls import path,include

from login import views as viewsLogin
from register import views as viewsRegister
from home import views as viewsHome

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', viewsHome.home,name="Home"),
    path('login/', viewsLogin.login,name="Login"),
    path('register/', viewsRegister.register,name="Register"),
    #path('', include('django_app.urls'))
]