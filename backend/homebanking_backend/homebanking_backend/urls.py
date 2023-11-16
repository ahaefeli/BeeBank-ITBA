from django.contrib import admin
from django.urls import path,include

from login import views as viewsLogin
from register import views as viewsRegister
from home import views as viewsHome
from accounts import views as viewsAccounts
from loans import views as viewsLoans
from support import views as viewsSupport
from transfers import views as viewsTransfers
from initPage import views as viewsInitPage
from faq import views as viewsFaq

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', viewsHome.home,name="Home"),
    path('login/', viewsLogin.login,name="Login"),
    path('register/', viewsRegister.register,name="Register"),
    path('accounts/', viewsAccounts.accounts,name="Accounts"),
    path('loans/', viewsLoans.loans,name="Loans"),
    path('support/', viewsSupport.support,name="Support"),
    path('transfers/', viewsTransfers.transfers,name="Transfers"),
    path('faq/', viewsFaq.faq,name="Faq"),
    path('', viewsInitPage.initPage,name="Inicio"),
    #path('', include('django_app.urls'))
]