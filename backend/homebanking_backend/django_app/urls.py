from rest_framework import routers
from .api import ClienteViewSet

router = routers.DefaultRouter()

router.register('api/cliente', ClienteViewSet, 'clientes')
urlpatterns = router.urls
