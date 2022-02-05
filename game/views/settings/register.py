from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player

def register(request):
    data = request.GET
    username = data.get("username", "").strip();
    password = data.get("password", "").strip();
    password_confirm = data.get("password_confirm", "").strip();
    if not username or not password:
        return JsonResponse({
            'result': "用户名或密码不能为空"
            })
    if password != password_confirm:
        return JsonResponse({
            'result': "两次密码不一致"
            })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result': "用户名已存在"
            })
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F21%2F20200521191149_tnmug.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646671413&t=e5f724847ca394b8b019d8e90959fc3d")
    login(request, user)
    return JsonResponse({
        'result': "success",
        })

