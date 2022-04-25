class Info {
    constructor(menu) {
        this.menu = menu;
        this.$information = $(`
<div class="ac-game-info">
    <div class="ac-game-info-item">
            <div class="ac-game-info-item-settings">设置</div>
            <div class="ac-game-info-item-back">×</div>
        <div class="ac-game-info-left">
            <div class="ac-game-info-item-account-settings">账号设置</div>
            <div class="ac-game-info-item-explain">游戏说明</div>
            <div class="ac-game-info-item-key">按键设置</div>
        </div>
        <div class="ac-game-info-item-userinfo">
            <img class="ac-game-info-item-userinfo-photo" src="/static/image/playground/choose_skin/lbxx.jpg" />
            <p class="ac-game-info-item-userinfo-username"></p>
            <input class="ac-game-info-item-userinfo-signature-change" type="text" placeholder="输入用户名" size="7"/>
            <div class="ac-game-info-item-userinfo-changename ac-game-info-item-userinfo-changename-fix">编辑用户名</div>
            <div class="ac-game-info-item-userinfo-changename ac-game-info-item-userinfo-changename-confirm">确认</div>
            <div class="ac-game-info-item-userinfo-return">退出账号</div>
        </div>
        <div class="ac-game-info-gameexplain">
            一款类似于球球大作战的游戏~<br>
            目前仍在开发中，感谢大家支持~<br>
            <br>
            鼠标右键: 小球移动<br>
            Q+鼠标左键: 发射火球<br>
            F+鼠标左键: 闪现(有距离限制)<br>
            多人模式局内聊天：&ltEnter&gt <br>
             关闭局内聊天：&ltEsc&gt <br>
        </div>
    </div>
</div>
`);

        this.menu.$menu.append(this.$information);
        this.$info_confirm = this.$information.find(".ac-game-info-item-userinfo-changename-confirm");
        this.$info_confirm.hide();

        this.$item = this.$information.find('.ac-game-info-item');
        this.$settings = this.$information.find('.ac-game-info-item-settings');
        this.$account_settings = this.$information.find('.ac-game-info-item-account-settings');
        this.$explain = this.$information.find('.ac-game-info-item-explain');
        this.$key = this.$information.find('.ac-game-info-item-key');
        this.$change_info = this.$information.find('.ac-game-info-item-userinfo-changename-fix');
        this.$logout_button = this.$information.find('.ac-game-info-item-userinfo-return');
        this.$name_input = this.$information.find('.ac-game-info-item-userinfo-signature-change');

        this.$info = this.$information.find('.ac-game-item-userinfo');
        this.$username = this.$information.find('.ac-game-info-item-userinfo-username');
        this.$username.attr("title", this.menu.root.settings.username);
        this.$back_button = this.$information.find('.ac-game-info-item-back');
        this.$img = this.$information.find('.ac-game-info-item-userinfo-photo');
        this.$name_input.hide();
        this.$information.hide();

        this.$gameexplain = this.$information.find('.ac-game-info-gameexplain');
        this.$gameexplain.hide();
        this.change_photo();
        this.change_username();
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    change_photo() {
        this.$img.attr("src", this.menu.root.settings.photo); // jquery换html属性 .attr("属性名", "属性值")  jquery换css属性 .css("属性名", "属性值")
    }

    change_username() {
        this.$username.html(this.menu.root.settings.username); // div 内文字赋值
    }

    change_info_on_remote() {
        let outer = this;
        let oldusername = this.menu.root.settings.username;
        let newusername = this.$name_input.val();
        //let photo = this.$img.attr('src');
        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/change_info",
            type: "GET",
            data: {
                oldusername: oldusername,
                newusername: newusername,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    outer.menu.root.settings.username = newusername;
                    //outer.menu.root.settings.photo = photo;
                } else {
                    alert(resp.result);
                    outer.$username.html(outer.menu.root.settings.username);
                }
            }
        });
    }

    add_listening_events() {
        let outer = this;
        this.$back_button.mouseover(function () {
            outer.$back_button.css("backgroundColor", "rgba(255, 0, 0, 0.6)");
        });

        this.$back_button.mouseout(function () {
            outer.$back_button.css("backgroundColor", "rgba(255, 255, 255, 0.6)");
        });

        this.$back_button.click(function () {
            outer.hide();
            //console.log(outer.menu.root.settings.username);
        });

        this.$logout_button.click(function () {
            outer.hide();
            outer.menu.hide();
            outer.menu.root.settings.logout_on_remote();
        });

        this.$change_info.click(function () {
            outer.$name_input.val(''); // 赋值为空 .val('');
            outer.$username.hide();
            outer.$change_info.hide();
            outer.$info_confirm.show();
            outer.$name_input.show();
        });

        this.$info_confirm.click(function () {
            outer.show_fix(); // 修改用户名
            outer.$info_confirm.hide();
            outer.$change_info.show();
            outer.change_info_on_remote(); // 远远程修改头像
            outer.$name_input.hide();
            outer.$username.show();
        });

        this.$explain.click(function () {
            // outer.$info.hide();
            outer.$img.hide();
            outer.$change_info.hide();
            outer.$username.hide();
            outer.$logout_button.hide();
            outer.$gameexplain.show();
        });

        this.$account_settings.click(function () {
            outer.$gameexplain.hide();
            outer.init_account_settings_show();
        });
    }

    show_fix() {
        let outer = this;
        let text = outer.$name_input.val(); // 取出input框的内容
        if (text) { // 修改用户名
            outer.$username.html(text);
        }
    }

    hide() {
        this.$information.hide();
    }

    init_account_settings_show() {
        this.$img.show();
        this.$change_info.show();
        this.$username.show();
        this.$logout_button.show();
    }

    show() {
        this.$information.show();
    }
}
