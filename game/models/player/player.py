from xml.etree.ElementInclude import default_loader
from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=256, blank=True)
    openid = models.CharField(default="", max_length=50, blank=True, null=True)
    fireball = models.IntegerField(default=81)
    blink = models.IntegerField(default=70)

    def __str__(self):
        return str(self.user)
