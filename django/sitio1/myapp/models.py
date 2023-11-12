from django.db import models

# Create your models here.

class Project(models.Model):
    title= models.TextField(max_lenght=200)
    descripcion = models.models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name
    