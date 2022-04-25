from django.http import JsonResponse
from game.models.player.player import Player


def getinfo_acapp(request):
    player = Player.objects.all()[0]  # 取第一名玩家
    return JsonResponse({
        'result': "success",
        'username': player.user.username,
        'photo': player.photo,
        'fireball_key': player.fireball,
        'blink_key': player.blink,
    })


def getinfo_web(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': "未登录",
        })
    else:
        player = Player.objects.get(user=user)
        return JsonResponse({
            'result': "success",
            'username': player.user.username,
            'photo': player.photo,
            'fireball_key': player.fireball,
            'blink_key': player.blink,
        })


def getinfo(request):
    platform = request.GET.get('platform')
    if platform == "ACAPP":
        return getinfo_acapp(request)
    elif platform == "WEB":
        return getinfo_web(request)
