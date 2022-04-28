from operator import imod
from django.http import JsonResponse
from django.contrib.auth.models import User
from game.models.player.player import Player


def change_skill(request):
    data = request.GET
    newfireball = data.get("newfireball")
    oldfireball = data.get("oldfireball")
    newblink = data.get("newblink")
    oldblink = data.get("oldblink")
    username = data.get("username")

    if not newfireball or not newblink:
        return JsonResponse({
            'result': "按键不能为空",
        })

    if newfireball == newblink:
        return JsonResponse({
            'result': "按键不能相同",
        })

    if(newfireball < '0' or (newfireball > '9' and newfireball < 'A') or newfireball > 'Z'):
        return JsonResponse({
            'result': "只能为大写字母或数字",
        })

    if(newblink < '0' or (newblink > '9' and newblink < 'A' or newblink > 'Z')):
        return JsonResponse({
            'result': "只能为大写字母或数字",
        })

    if(len(newblink) >= 2 or len(newfireball) >= 2):
        return JsonResponse({
            'result': "请输入单个字母或数字",
        })

    user = User.objects.get(username=username)
    player = Player.objects.get(user=user)
    player.fireball = newfireball
    player.blink = newblink
    user.save()
    player.save()
    return JsonResponse({
        'result': "success",
    })
