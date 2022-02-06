from django.shortcuts import redirect
from django.core.cache import cache
import requests
from django.contrib.auth.models import User
from game.models.player.player import Player
from django.contrib.auth import login
from random import randint

def receive_code(request):
    data = request.GET
    code = data.get('code')
    state = data.get('state')

    if not cache.has_key(state):
        return redirect("index")

    cache.delete(state)

    apply_access_token_url = "https://www.acwing.com/third_party/api/oauth2/access_token/"
    params = {
        'appid': "1372",
        'secret': "1ef4dde35f7648d58f122e3782d78822",
        'code': code,
        }

    access_token_res = requests.get(apply_access_token_url, params=params).json()

    access_token = access_token_res['access_token']
    openid = access_token_res['openid']

    players = Player.objects.filter(openid=openid) # 查看用户是否存在

    if players.exists():
        login(request, players[0].user)
        return redirect("index")

    get_userinfo_url = "https://www.acwing.com/third_party/api/meta/identity/getinfo/"
    params = {
            "access_token": access_token,
            "openid": openid
    }

    userinfo_res = requests.get(get_userinfo_url, params=params).json();
    username = userinfo_res['username']
    photo = userinfo_res['photo']

    while User.objects.filter(username=username).exists(): # 重名时往后添加数
        username += str(randint(0, 9))


    # 注册
    user = User.objects.create(username=username)
    player = Player.objects.create(user=user, photo=photo, openid=openid)
    login(request, user)


    return redirect("index")
