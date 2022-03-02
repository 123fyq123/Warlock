from django.http import JsonResponse
from django.contrib.auth.models import User
from game.models.player.player import Player


def change_info(request):
    data = request.GET
    newusername = data.get("newusername")
    oldusername = data.get("oldusername")

    if not newusername:
        return JsonResponse({
            'result': "用户名不能为空",
        })

    if User.objects.filter(username=newusername).exists():
        return JsonResponse({
            'result': "用户名已存在",
        })
    user = User.objects.get(username=oldusername)
    user.username = newusername
    user.save()
    return JsonResponse({
        'result': "success",
    })
