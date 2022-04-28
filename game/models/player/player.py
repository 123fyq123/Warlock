from xml.etree.ElementInclude import default_loader
from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=510, blank=True)
    openid = models.CharField(default="", max_length=50, blank=True, null=True)
    fireball = models.CharField(default='Q', max_length=10)
    blink = models.CharField(default='F', max_length=10)

    def __str__(self):
        return str(self.user)
