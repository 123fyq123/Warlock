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
            <div class="ac-game-info-item-explain">技能介绍</div>
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
            以下是默认技能按键
            <br>
            <br>
            鼠标右键: 小球移动<br>
            Q+鼠标左键: 发射火球<br>
            F+鼠标左键: 闪现(有距离限制)<br>
            多人模式局内聊天：&ltEnter&gt <br>
             关闭局内聊天：&ltEsc&gt <br>
        </div>
        <div class="ac-game-info-keyboard-settings">
            <div class="ac-game-info-keyboard-settings-explain">目前只支持技能的修改,且只能修改为字母(大写)和数字</div>
            <div class="ac-game-info-keyboard-settings-fireball">火球技能:</div>
            <div class="ac-game-info-keyboard-settings-blink">闪现技能:</div>
            <input class="ac-game-info-keyboard-settings-fireball-input">
            <input class="ac-game-info-keyboard-settings-blink-input">
            <div class="ac-game-info-keyboard-settings-fireball-show"></div>
            <div class="ac-game-info-keyboard-settings-blink-show"></div>
            <div class="ac-game-info-keyboard-settings-fix">编辑技能</div>
            <div class="ac-game-info-keyboard-settings-finish">结束编辑</div>
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
        this.$userinfo_father = this.$information.find('.ac-game-info-item-userinfo');

        this.$gameexplain = this.$information.find('.ac-game-info-gameexplain');

        this.$fireball_input = this.$information.find('.ac-game-info-keyboard-settings-fireball-input');
        this.$blink_input = this.$information.find('.ac-game-info-keyboard-settings-blink-input');
        this.$fireball_show = this.$information.find('.ac-game-info-keyboard-settings-fireball-show');
        this.$blink_show = this.$information.find('.ac-game-info-keyboard-settings-blink-show');
        this.$fireball = this.$information.find('.ac-game-info-keyboard-settings-fireball');
        this.$blink = this.$information.find('.ac-game-info-keyboard-settings-blink');
        this.$skill_fix = this.$information.find('.ac-game-info-keyboard-settings-fix');
        this.$skill_fix_father = this.$information.find('.ac-game-info-keyboard-settings');
        this.$finish_skill = this.$information.find('.ac-game-info-keyboard-settings-finish');

        this.$gameexplain.hide();
        this.show_account_settings();
        this.change_photo();
        this.change_username();
        this.change_skill();
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

    change_skill() {
        this.$fireball_show.html(this.menu.root.settings.fireball_key);
        this.$blink_show.html(this.menu.root.settings.blink_key);
    }

    change_skill_on_remote() {
        let outer = this;
        let oldfireball = this.menu.root.settings.fireball_key;
        let newfireball = this.$fireball_input.val();
        let oldblink = this.menu.root.settings.blink_key;
        let newblink = this.$blink_input.val();
        let username = this.menu.root.settings.username;

        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/change_skill",
            type: "GET",
            data: {
                oldfireball: oldfireball,
                newfireball: newfireball,
                oldblink: oldblink,
                newblink: newblink,
                username: username,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    outer.menu.root.settings.fireball_key = newfireball;
                    outer.menu.root.settings.blink_key = newblink;
                } else {
                    alert(resp.result);
                    outer.$fireball_show.html(outer.menu.root.settings.fireball_key);
                    outer.$blink_show.html(outer.menu.root.settings.blink_key);
                }
            }
        });
    }

    change_info_on_remote() {
        let outer = this;
        let oldusername = this.menu.root.settings.username;
        let newusername = this.$name_input.val();
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

    show_skill_fixed() {
        let outer = this;
        let fireball_text = outer.$fireball_input.val();
        let blink_text = outer.$blink_input.val();
        if (fireball_text && blink_text && fireball_text.length == 1 && blink_text.length == 1
            && (fireball_text >= 'A' && fireball_text <= 'Z' || fireball_text >= '0' && fireball_text <= '9')
            && (blink_text >= 'A' && blink_text <= 'Z' || blink_text >= '0' && blink_text <= '9')) {
            outer.$blink_show.html(blink_text);
            outer.$fireball_show.html(fireball_text);
        }
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
        });

        this.$logout_button.click(function () {
            outer.hide();
            outer.menu.hide();
            outer.menu.root.settings.logout_on_remote();
        });

        this.$account_settings.click(function () {
            outer.show_account_settings();
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
            outer.show_explain();
        });

        this.$account_settings.click(function () {
            outer.$gameexplain.hide();
            outer.init_account_settings_show();
        });

        this.$key.click(function () {
            outer.show_skill_fix();
        });

        this.$skill_fix.click(function () {
            outer.$blink_input.val('');
            outer.$fireball_input.val('');
            outer.$fireball_input.show();
            outer.$blink_input.show();
            outer.$fireball_show.hide();
            outer.$blink_show.hide();
            outer.$skill_fix.hide();
            outer.$finish_skill.show();
        });

        this.$finish_skill.click(function () {
            outer.show_skill_fixed();
            outer.change_skill_on_remote();
            outer.finish_fix_skill();
        });
    }

    show_fix() {
        let outer = this;
        let text = outer.$name_input.val(); // 取出input框的内容
        if (text) { // 修改用户名
            outer.$username.html(text);
        }
    }

    show_skill_fix() {
        this.$userinfo_father.hide();
        this.$gameexplain.hide();
        this.$skill_fix_father.show();
        this.$fireball_input.hide();
        this.$blink_input.hide();
        this.$finish_skill.hide();
        this.$blink_show.show();
        this.$fireball_show.show();
        this.$skill_fix.show();
    }

    show_explain() {
        this.$skill_fix_father.hide();
        this.$userinfo_father.hide();
        this.$gameexplain.show();
        this.$blink_show.show();
        this.$fireball_show.show();
        this.$skill_fix.show();
    }

    finish_fix_skill() {
        this.$blink_input.hide();
        this.$fireball_input.hide();
        this.$blink_show.show();
        this.$fireball_show.show();
        this.$skill_fix.show();
        this.$finish_skill.hide();
    }

    show_account_settings() {
        this.$skill_fix_father.hide();
        this.$gameexplain.hide();
        this.$userinfo_father.show();
        this.$info_confirm.hide();
        this.$name_input.hide();
        this.$username.show();
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
