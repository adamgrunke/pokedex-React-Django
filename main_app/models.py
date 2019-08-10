from django.db import models

# Create your models here.
# main_app/models.py
from django.db import models

class Pokemon(models.Model):
    name = models.CharField(max_length=100)


    def __str__(self):
        return self.name 
