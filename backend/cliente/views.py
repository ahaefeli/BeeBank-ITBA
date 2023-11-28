from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializer import UserSerializer
from django.contrib.auth.models import User

class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        #return User.objects.get(id=self.request.user.id)
        return User.objects.get(id=5)