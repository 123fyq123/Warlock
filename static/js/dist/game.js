class AcGameChooseMode {
    constructor(root) {
        this.root = root;
        this.$choose_mode = $(`
<div class="ac-game-choose-mode">
    <div class="ac-game-choose-mode-top">
        <div class="ac-game-choose-mode-top-left-triangle"></div>
        <div class="ac-game-choose-mode-top-mode">简单</div>
        <div class="ac-game-choose-mode-top-right-triangle"></div>
    </div>
    <br/>
    <div class="ac-game-choose-mode-middle">
        <div class="ac-game-choose-mode-middle-board">
            <div class="ac-game-choose-mode-middle-board-explain">
                AI人数为4
            </div>
        </div>
    </div>
    <br/>
    <div class="ac-game-choose-mode-bottom">
        <div class="ac-game-choose-mode-bottom-submit">确认</div>
        <div class="ac-game-choose-mode-bottom-return">返回</div>
    </div>
</div>
`);

        this.mode_names = ["简单", "中等", "困难"];
        this.mode_explain = ["AI人数为4", "AI人数为6", "AI人数为8"];

        this.cur_mode = 0;
        this.total_mode = 3;
        this.$left_triangle = this.$choose_mode.find('.ac-game-choose-mode-top-left-triangle');
        this.$right_triangle = this.$choose_mode.find('.ac-game-choose-mode-top-right-triangle');
        this.$confirm_submit = this.$choose_mode.find('.ac-game-choose-mode-bottom-submit');
        this.$diff_mode = this.$choose_mode.find('.ac-game-choose-mode-top-mode');
        this.$diff_explain = this.$choose_mode.find('.ac-game-choose-mode-middle-board-explain');
        this.$diff_return = this.$choose_mode.find('.ac-game-choose-mode-bottom-return');
        this.$choose_mode.hide();
        this.root.$ac_game.append(this.$choose_mode);
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;

        this.$left_triangle.click(function(){
            outer.cur_mode -- ;
            if (outer.cur_mode < 0) outer.cur_mode = outer.total_mode - 1;
            outer.change_mode();
        });

        this.$right_triangle.click(function(){
            outer.cur_mode ++ ;
            if (outer.cur_mode >= outer.total_mode) outer.cur_mode = 0;
            outer.change_mode();
        });

        this.$confirm_submit.click(function(){
            outer.hide();
            outer.root.playground.game_mode = outer.mode_names[outer.cur_mode];
            outer.root.choose_skin.show();
        });

        this.$diff_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }

    change_mode() {
        this.$diff_mode.html(this.mode_names[this.cur_mode]);
        this.$diff_explain.html(this.mode_explain[this.cur_mode]);
    }

    hide() {
        this.$choose_mode.hide();
    }

    show() {
        this.$choose_mode.show();
    }

}
class AcGameChooseSkin {
    constructor(root) {
        this.root = root;
        this.$choose_skin = $(`
<div class="ac-game-choose-skin">
    <div class="ac-game-choose-skin-top">
        <div class="ac-game-choose-mode-top-left-triangle"></div>
        <img class="ac-game-choose-skin-top-people-photo" src="https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/lbxx/lbxx.jpg"/>
        <div class="ac-game-choose-mode-top-right-triangle"></div>
    </div>
    <br/>
    <div class="ac-game-choose-skin-middle">
        <div class="ac-game-choose-skin-middle-people">
            野原新之助
        </div>
        <br/>
        <div class="ac-game-choose-skin-middle-explain">
            住在春日部郊区某住宅区一栋二层小平房。喜欢漂亮的大姐姐，深爱着娜娜子姐姐，喜欢做屁股外星人的动作。
        </div>
    </div>
    <br/>
    <div class="ac-game-choose-skin-bottom">
        <div class="ac-game-choose-skin-bottom-submit-confirm">确认</div>
        <div class="ac-game-choose-skin-bottom-submit-return">返回</div>
    </div>
</div>
`)

    this.$choose_skin.hide();
    this.$right_triangle = this.$choose_skin.find('.ac-game-choose-mode-top-right-triangle');
    this.$left_triangle = this.$choose_skin.find('.ac-game-choose-mode-top-left-triangle');
    this.$choose_people = this.$choose_skin.find('.ac-game-choose-skin-middle-people');
    this.$people_explain = this.$choose_skin.find('.ac-game-choose-skin-middle-explain');
    this.$people_confirm = this.$choose_skin.find('.ac-game-choose-skin-bottom-submit-confirm');
    this.$people_return = this.$choose_skin.find('.ac-game-choose-skin-bottom-submit-return');
    //this.$skin_img = this.$choose_skin.find('.ac-game-choose-skin-top-people-photo');

    this.root.$ac_game.append(this.$choose_skin);


    this.photo_url = [
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/lbxx.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/dog.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/fj.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/zn.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/ad.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/nn.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/mather.jpg",
"https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/father.jpg",
]

    this.people_name = ["野原新之助", "小白", "风间彻", "佐藤正男", "阿呆", "樱田妮妮", "野原美伢", "野原广志"];
    this.people_explain = [
"住在春日部郊区某住宅区一栋二层小平房。喜欢漂亮的大姐姐，深爱着娜娜子姐姐，喜欢做屁股外星人的动作。",
"被抛弃的弃狗，后来被小新捡回家，取名为小白，后来又被小新称作野原小白。",
"向日葵班学生。家境优越，喜欢装自己成熟，有点装腔作势，自尊心很强。幼儿园外上各种各样的补习班。小新和他经常碰到，他们两个总是吵架，但很快就会和好，是很好的朋友。",
"向日葵班学生，爱哭。在朋友之间，脸的形式很像“饭团”。喜欢小爱。",
"向日葵班学生。总是发呆，拖着鼻涕，说话的时候很敏锐。特长是用鼻涕制作螺旋桨和东京铁塔的事。最高兴的时候，流鼻涕快速旋转。",
"向日葵班学生。喜欢当淑女，却总是很凶。喜欢玩超现实扮家家酒，朋友们都不愿意陪她玩，却不敢说什么。跟妈妈一样，不如意时常常在厕所或没有人的角落里拿兔子拳打脚踢来出气。",
"年龄：35岁。生于秋田，是一个上班族，脚很臭，有着三十二年房贷……",
"家庭主妇一枚，野原广志的妻子，小新、小葵的母亲。脾气暴躁，喜欢帅哥。",
]

    this.cur_skin = 0;
    this.total_skin = 8;
    this.start();


    }

    start(){
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$left_triangle.click(function(){

            outer.cur_skin -- ;
            if (outer.cur_skin < 0) outer.cur_skin = outer.total_skin - 1;
            outer.change_skin();
        });

        this.$right_triangle.click(function(){
            outer.cur_skin ++ ;
            if (outer.cur_skin >= outer.total_skin) outer.cur_skin = 0;
            outer.change_skin();
        });

        this.$people_confirm.click(function(){
            outer.hide();
            outer.root.playground.show("single mode",outer.photo_url[outer.cur_skin]);
        });

        this.$people_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }

    change_skin() {
        let img = document.getElementsByClassName("ac-game-choose-skin-top-people-photo")[0];
        img.src = this.photo_url[this.cur_skin];
        this.$choose_people.html(this.people_name[this.cur_skin]);
        this.$people_explain.html(this.people_explain[this.cur_skin]); // $().html()方法
    }

    show() {
        this.$choose_skin.show();
    }

    hide() {
        this.$choose_skin.hide();
    }
}
class AcGameDesc {
    constructor(root) {
        this.root = root;
        this.$desc = $(`
<div class="ac-game-desc">
    <div class="ac-game-desc-field">
        <div class="ac-game-desc-field-item">
            游戏说明
        </div>
        <br/>
        <div class="ac-game-desc-field-explain">
            <p>右键：点击可移动</p>
            <p>q+左键：发射火球</p>
            <p>f+左键：闪现</p>
            <p>enter：多人模式下局内聊天</p>
            <p>Esc：关闭聊天框</p>
            <p>前3秒无法使用技能</p>
        </div>
        <br/>
        <div class="ac-game-desc-field-confirm">
            确认
        </div>
    </div>
</div>
            `);

        this.$desc.hide();
        this.root.$ac_game.append(this.$desc);

        this.$confirm = this.$desc.find('.ac-game-desc-field-confirm');

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$confirm.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    show() {
        this.$desc.show();
    }

    hide() {
        this.$desc.hide();
    }
}
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
class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            设置
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-explain">
            游戏说明
        </div>
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.$game_explain = this.$menu.find('.ac-game-menu-field-item-explain');
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function () {
            outer.hide();
            outer.root.choose_mode.show();
        });

        this.$multi_mode.click(function () {
            outer.hide();
            outer.root.playground.show("multi mode");
        });

        this.$settings.click(function () {
            outer.info = new Info(outer);
            outer.info.show();
            //outer.root.settings.logout_on_remote();
        });

        this.$game_explain.click(function () {
            outer.hide();
            outer.root.desc.show();
        });
    };

    show() { // 显示menu界面
        this.$menu.show();
    }

    hide() { //关闭menu界面
        this.$menu.hide();
    }
}
let AC_GAME_OBJECTS = [];

class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);

        this.has_called_start = false; //是否执行过start函数
        this.timedelta = 0;   // 当前帧距离上一帧的时间间隔，单位ms
        this.uuid = this.create_uuid();

    }

    create_uuid() {
        let res = "";
        for (let i = 0; i < 8; i ++ ) {
            let x = parseInt(Math.floor(Math.random() * 10)); // 返回[0,1)之间的数
            res += x;
        }
        return res;
    }
    start(){ // 只会在第一帧执行
    }

    update(){ // 每一帧都会执行     

    }

    late_update() { // 在每一帧的最后执行
        
    }

    on_destroy() { // 在被删除前执行
        
    }


    destroy(){ // 删除该物体

        this.on_destroy();

        for(let i = 0; i < AC_GAME_OBJECTS.length; i ++ ){
            if(AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1); // pop物体
                break;
            }
        }
    }
}

let last_timestamp;// 上一个时间戳
let AC_GAME_ANIMATION = function(timestamp) {
    for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ) {
        let obj = AC_GAME_OBJECTS[i];
        if(!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;// 记录时间差
            obj.update();
        }
    }

    for(let i = 0; i <  AC_GAME_OBJECTS.length; i ++ ) {
        let obj = AC_GAME_OBJECTS[i];
        obj.late_update();
    }

    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);// 递归调用API
}

requestAnimationFrame(AC_GAME_ANIMATION);
class ChatField {
    constructor(playground) {
        this.playground = playground;

        this.$history = $(`<div class="ac-game-chat-field-history">历史记录</div>`);
        this.$input = $(`<input type="text" class="ac-game-chat-field-input" placeHolder="Esc键退出">`);

        this.$history.hide();
        this.$input.hide();
        this.func_id = null;

        this.playground.$playground.append(this.$history);
        this.playground.$playground.append(this.$input);

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        let default_val = "Esc键退出";
        this.$input.keydown(function(e) {
            if (e.which === 27) { // Esc
                outer.hide_input();
            } else if (e.which === 13) { // enter
                let username = outer.playground.root.settings.username;
                let text = outer.$input.val();
                if (text) {
                    outer.$input.val("");
                    outer.add_message(username, text);
                    outer.playground.mps.send_message(username, text);
                }
            }
        });

    }


    render_message(message) {
        return $(`<div>${message}</div>`); // 将信息封装成html对象
    }

    add_message(username, text) {
        this.show_history();
        let message = `[${username}]${text}`; // 中括号内写人名，中括号外写信息
        this.$history.append(this.render_message(message));
        this.$history.scrollTop(this.$history[0].scrollHeight); // 将历史记录滚动条移到最下
    }


    show_history() {
        let outer = this;
        this.$history.fadeIn();// 淡入

        if (this.func_id) clearTimeout(this.func_id);

        this.func_id = setTimeout(function() {
            outer.$history.fadeOut();
            outer.func_id = null;
        }, 3000);
    }

    show_input() {
        this.show_history();

        this.$input.show();
        this.$input.focus();
    }

    hide_input() {
        this.$input.hide();
        this.playground.game_map.$canvas.focus();
    }
}
class GameMap extends AcGameObject {
    constructor(playground){
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas tabindex=0></canvas>`); // 使canvas能绑定监听事件
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);

        this.back_img = new Image();
        this.back_img.src = "https://app1372.acapp.acwing.com.cn/static/image/menu/single_mode.jpg";
    }

    start() {
        this.$canvas.focus();
    }

    resize() {
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.ctx.drawImage(this.back_img, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    update(){
        this.render();
    }

    render(){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        this.ctx.drawImage(this.back_img, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
class NoticeBoard extends AcGameObject {
    constructor(playground) {
        super();

        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.text = "已就绪：0人";

    }


    start() {
    }

    update() {
        this.render();
    }

    write(text) {
        this.text = text;
    }

    render() {
        this.ctx.font = "20px serif";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.text, this.playground.width / 2, 20);
    }
}
class Particle extends AcGameObject {
    constructor(playground, x, y, radius, vx, vy, color, speed, move_length) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.speed = speed;
        this.friction = 0.9;
        this.move_length = move_length;
        this.eps = 0.01;
    }

    start(){

    }

    update(){
        if (this.move_length < this.eps || this.speed < this.eps) {
            this.destroy();
            return false;
        }
        let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
        this.x += this.vx * moved;
        this.y += this.vy * moved;
        this.speed *= this.friction;
        this.move_length -= moved;
        this.render();
    }

    render(){
        let scale = this.playground.scale;
        this.ctx.beginPath();
        this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}
class Player extends AcGameObject {
    constructor(playground, x, y, radius, color, speed, character, username, photo) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.damage_x = 0;
        this.damage_y = 0;
        this.damage_speed = 0;
        this.move_length = 0;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.character = character;
        this.username = username;
        this.photo = photo;
        this.eps = 0.01;
        this.spent_time = 0;
        this.friction = 0.9;
        this.cur_skill = null;
        this.fireballs = [];
        this.time_id1 = null; // 出现3秒提示字冷却时间
        this.time_id2 = null; // 跳转会主菜单的冷却时间
        this.return_time = null; // 浮现返回按钮冷却时间
        this.img = new Image();
        this.img.src = this.photo;

        if (this.character === "me") {
            this.fireball_coldtime = 1.5; // 单位 秒
            this.fireball_img = new Image(); // 创建火球技能图标
            this.fireball_img.src = "https://cdn.acwing.com/media/article/image/2021/12/02/1_9340c86053-fireball.png";

            this.blink_coldtime = 4; // 闪现cd 5s
            this.blink_img = new Image();
            this.blink_img.src = "https://cdn.acwing.com/media/article/image/2021/12/02/1_daccabdc53-blink.png";
        }
    }

    start() {
        this.playground.player_count++;
        this.playground.notice_board.write("已就绪：" + this.playground.player_count + "人");

        if (this.playground.player_count >= 2) {
            this.playground.state = "fighting";
            this.playground.notice_board.write("Fighting!");
        }

        if (this.character === "me") {
            this.add_listening_events();
        } else if (this.character === "robot") {
            let tx = Math.random() * this.playground.width / this.playground.scale;
            let ty = Math.random() * this.playground.height / this.playground.scale;
            this.move_to(tx, ty);
        }
    }

    add_listening_events() {
        let outer = this;
        this.playground.game_map.$canvas.on("contextmenu", function () {
            return false;
        });

        this.playground.game_map.$canvas.mousedown(function (e) {
            if (outer.playground.state !== "fighting") // 人数未满b无法移动
                return true;


            const rect = outer.ctx.canvas.getBoundingClientRect();
            if (e.which === 3) {
                let tx = (e.clientX - rect.left) / outer.playground.scale;
                let ty = (e.clientY - rect.top) / outer.playground.scale;
                outer.move_to(tx, ty);

                if (outer.playground.mode === "multi mode") {
                    outer.playground.mps.send_move_to(tx, ty);
                }
            } else if (e.which === 1 && outer.radius > 0.01) {
                let tx = (e.clientX - rect.left) / outer.playground.scale;
                let ty = (e.clientY - rect.top) / outer.playground.scale;
                if (outer.cur_skill === "fireball") {
                    if (outer.fireball_coldtime > outer.eps)
                        return false;

                    let fireball = outer.shoot_fireball(tx, ty);

                    if (outer.playground.mode === "multi mode") {
                        outer.playground.mps.send_shoot_fireball(tx, ty, fireball.uuid);
                    }
                } else if (outer.cur_skill === "blink") {
                    if (outer.blink_coldtime > outer.eps)
                        return false;
                    outer.blink(tx, ty);

                    if (outer.playground.mode === "multi mode") {
                        outer.playground.mps.send_blink(tx, ty);
                    }
                }

                outer.cur_skill = null;
            }
        });

        this.playground.game_map.$canvas.keydown(function (e) {
            if (e.which === 13) { // enter键
                if (outer.playground.mode === "multi mode") { // 多人模式打开聊天框
                    outer.playground.chat_field.show_input();
                    return false;
                }
            } else if (e.which === 27) { // esc键退出
                if (outer.playground.mode === "multi mode") {
                    outer.playground.chat_field.hide_input();
                }
            }

            if (outer.playground.state !== "fighting")
                return true; // 人数未满无法释放技能

            if (String.fromCharCode(e.which) === outer.playground.root.settings.fireball_key) { // q键

                if (outer.fireball_coldtime > outer.eps || outer.spent_time < 3)
                    return true;

                outer.cur_skill = "fireball";
                return false;
            } else if (String.fromCharCode(e.which) === outer.playground.root.settings.blink_key) { // f键
                if (outer.blink_coldtime > outer.eps)
                    return true;

                outer.cur_skill = "blink";
                return false;
            }
        });
    }

    shoot_fireball(tx, ty) {
        let x = this.x, y = this.y;
        let radius = 0.02;
        let angle = Math.atan2(ty - this.y, tx - this.x);
        let vx = Math.cos(angle);
        let vy = Math.sin(angle);
        let color = "orange";
        let speed = 0.7;
        let move_length = 1;
        let fireball = new FireBall(this.playground, this, x, y, radius, vx, vy, color, speed, move_length, 0.01);
        this.fireballs.push(fireball); // 由于火球会消失，这里存在一个数组里

        this.fireball_coldtime = 1.5; // 重置技能cd

        return fireball;
    }

    destroy_fireball(uuid) {
        for (let i = 0; i < this.fireballs.length; i++) {
            let fireball = this.fireballs[i];
            if (fireball.uuid === uuid) {
                fireball.destroy();
                break;
            }
        }
    }

    blink(tx, ty) {
        let d = this.get_dist(this.x, this.y, tx, ty);
        d = Math.min(d, 0.5);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.x += d * Math.cos(angle);
        this.y += d * Math.sin(angle);

        this.blink_coldtime = 4;
        this.move_length = 0; // 闪现完停下来
    }

    is_attacked(angle, damage) {
        for (let i = 0; i < 20 + Math.random() * 10; i++) {
            let x = this.x;
            let y = this.y;
            let radius = this.radius * Math.random() * 0.1;
            let angle = Math.PI * 2 * Math.random();
            let vx = Math.cos(angle);
            let vy = Math.sin(angle);
            let color = "white";
            let speed = this.speed * 10;
            let move_length = this.radius * Math.random() * 5;
            new Particle(this.playground, x, y, radius, vx, vy, color, speed, move_length);
        }
        this.radius -= damage;
        if (this.radius < this.eps) {
            this.destroy();
            this.check_success();
            if (this.character === "me") {
                this.playground.notice_board.write("你输了");
                this.playground.score_board.lose();
                if (this.playground.mode === "single mode") {
                    this.turnto_menu();
                } else if (this.playground.mode === "multi mode") {
                    this.show_return();
                }
            }
            return false;
        }
        this.damage_x = Math.cos(angle);
        this.damage_y = Math.sin(angle);
        this.damage_speed = damage * 100;
        this.speed *= 0.8;
    }

    show_return() {
        let outer = this;
        if (this.return_time) clearTimeout(this.return_time);

        this.return_time = setTimeout(function () {
            outer.playground.score_board.$return_button.fadeIn();
        }, 3000);

    }

    turnto_menu() {
        let outer = this;
        if (this.time_id1) clearTimeout(this.time_id1);
        if (this.time_id2) clearTimeout(this.time_id2);

        this.time_id1 = setTimeout(function () {
            outer.playground.notice_board.write("3秒后返回主菜单");
            outer.time_id1 = null;
        }, 3000);

        this.time_id2 = setTimeout(function () {
            outer.playground.hide();
            outer.playground.root.menu.show();
            outer.time_id2 = null;
        }, 6000);
    }

    check_success() {
        if (this.playground.player_count === 1) {
            if (this.playground.players[0].character === "me") {
                this.playground.notice_board.write("你赢了");
                this.playground.score_board.win();
                if (this.playground.mode === "single mode") {
                    this.turnto_menu();
                } else if (this.playground.mode === "multi mode") {
                    this.show_return();
                }
                return true;
            }
        }
    }

    receive_attack(x, y, angle, damage, ball_uuid, attacker) {
        attacker.destroy_fireball(ball_uuid);
        this.x = x;
        this.y = y;
        this.is_attacked(angle, damage);
    }

    get_dist(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    move_to(tx, ty) {
        this.move_length = this.get_dist(this.x, this.y, tx, ty);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.vx = Math.cos(angle);
        this.vy = Math.sin(angle);

    }


    update() {
        this.spent_time += this.timedelta / 1000;

        if (this.character === "me" && this.playground.state === "fighting") {
            this.update_coldtime();
        }
        this.update_move();

        this.render();
    }


    update_coldtime() {
        this.fireball_coldtime -= this.timedelta / 1000;
        this.fireball_coldtime = Math.max(0, this.fireball_coldtime);
        this.blink_coldtime -= this.timedelta / 1000;
        this.blink_coldtime = Math.max(0, this.blink_coldtime);
    }

    update_move() { // 更新玩家移动
        if (this.character === "robot" && this.spent_time > 3 && Math.random() < 1 / 100.0) {
            let player = this.playground.players[Math.floor(Math.random() * this.playground.players.length)];
            if (player.uuid === this.uuid) return false;
            let tx = player.x + player.speed * this.vx * 0.3;
            let ty = player.y + player.speed * this.vy * 0.3;

            this.shoot_fireball(tx, ty);
        }
        if (this.damage_speed > this.eps) {
            this.vx = this.vy = 0;
            this.move_length = 0;
            this.x += this.damage_x * this.damage_speed * this.timedelta / 1000;
            this.y += this.damage_y * this.damage_speed * this.timedelta / 1000;
            this.damage_speed *= this.friction;
        } else {

            if (this.move_length < this.eps) {
                this.move_length = 0;
                this.vx = this.vy = 0;
                if (this.character === "robot") {
                    let tx = Math.random() * this.playground.width / this.playground.scale;
                    let ty = Math.random() * this.playground.height / this.playground.scale;
                    this.move_to(tx, ty);
                }
            } else {
                let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
                this.x += this.vx * moved;
                this.y += this.vy * moved;
                this.move_length -= moved;
            }
        }
    }


    render() {
        let scale = this.playground.scale;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.img, (this.x - this.radius) * scale, (this.y - this.radius) * scale, this.radius * 2 * scale, this.radius * 2 * scale);
        this.ctx.restore();

        if (this.character === "me" && this.playground.state === "fighting") {
            this.render_skill_coldtime();
        }
    }

    render_skill_coldtime() { // 渲染技能冷却时间
        let scale = this.playground.scale;
        let x = 1.5, y = 0.9, r = 0.04;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.fireball_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore(); // 显示火球技能图标

        if (this.fireball_coldtime > 0) {
            this.ctx.beginPath();// 显示冷却
            this.ctx.moveTo(x * scale, y * scale); // 由于canvas画的是封闭路径，所以得从圆心开始画
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.fireball_coldtime / 1.5) - Math.PI / 2, true);
            this.ctx.lineTo(x * scale, y * scale); // 最后画向圆心
            this.ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
            this.ctx.fill();
        }

        x = 1.62, y = 0.9, r = 0.04;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.blink_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore(); // 显示火球技能图标

        if (this.blink_coldtime > 0) {
            this.ctx.beginPath();// 显示冷却
            this.ctx.moveTo(x * scale, y * scale); // 由于canvas画的是封闭路径，所以得从圆心开始画
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.blink_coldtime / 4) - Math.PI / 2, true);
            this.ctx.lineTo(x * scale, y * scale); // 最后画向圆心
            this.ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
            this.ctx.fill();
        }
    }

    on_destroy() {
        if (this.character === "me") {
            if (this.playground.state === "fighting") {
                this.playground.state = "over";
            }
        }

        for (let i = 0; i < this.playground.players.length; i++) {
            if (this.playground.players[i] === this) {
                this.playground.players.splice(i, 1);
                this.playground.player_count--;
                break;
            }
        }
    }
}
class ScoreBoard extends AcGameObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;

        this.state = null; // win:胜利  lose:失败
        this.win_img = new Image();
        this.win_img.src = "https://cdn.acwing.com/media/article/image/2021/12/17/1_8f58341a5e-win.png";

        this.lose_img = new Image();
        this.lose_img.src = "https://cdn.acwing.com/media/article/image/2021/12/17/1_9254b5f95e-lose.png";

        this.first_return = false;
        this.$return_button = $(`
<div class="ac-game-score-board-return">
    返回
</div>
`);
        this.playground.$playground.append(this.$return_button);
        this.$return_button.hide();
        this.start();
    }

    start() {
    }

    win() {
        this.state = "win";
    }

    lose() {
        this.state = "lose";
    }

    late_update() {
        this.render();
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$return_button.click(function(){
            outer.playground.hide();
            outer.playground.root.menu.show();
            if (outer.playground.mode === "multi mode" && outer.first_return === false) {
                let username = outer.playground.root.settings.username;
                outer.playground.mps.send_return(username);
                outer.first_return = true;
                return ;
            }
        });
    }

    render() {
        let len = this.playground.height / 2;
        if (this.state === "win") {
            this.ctx.drawImage(this.win_img, this.playground.width / 2 - len / 2, this.playground.height / 2 - len / 2, len, len);
            // (图片，左上角顶点x坐标，左上角顶点y坐标，长，宽)
        } else if (this.state === "lose"){
            this.ctx.drawImage(this.lose_img, this.playground.width / 2 - len / 2, this.playground.height / 2 - len / 2, len, len);
        }
    }
}
class FireBall extends AcGameObject {
    constructor(playground, player, x, y, radius, vx, vy, color, speed, move_length, damage) {
        super();
        this.playground = playground;
        this.player = player;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.speed = speed;
        this.move_length = move_length;
        this.eps = 0.01;
        this.damage = damage;

        this.cur_skill = null;
    }

    start(){

    }

    update(){
        if (this.move_length < this.eps){
            this.destroy();
            return false;
        }

        this.update_move();

        if (this.player.character !== "enemy") {
            this.update_attack();
        }
        this.render();
    }

    update_move() {
        let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
        this.x += this.vx * moved;
        this.y += this.vy * moved;
        this.move_length -= moved;
    }

    update_attack() {
        for (let i = 0; i < this.playground.players.length; i ++ ) {
            let player = this.playground.players[i];
            if (this.player !== player && this.is_collision(player)) {
                this.attack(player);
            }
        }
    }

    get_dist(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    is_collision(player) {
        let distance = this.get_dist(this.x, this.y, player.x, player.y);
        if (distance < this.radius + player.radius) {
            return true;
        }
        return false;
    }

    attack(player) {
        let angle = Math.atan2(player.y - this.y, player.x - this.x);
        player.is_attacked(angle, this.damage);

        if (this.playground.mode === "multi mode") {
            this.playground.mps.send_attack(player.uuid, player.x, player.y, angle, this.damage, this.uuid);
        }
        this.destroy();
    }

    render(){
        let scale = this.playground.scale;
        this.ctx.beginPath();
        this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    on_destroy() {
       let fireballs = this.player.fireballs;
        for (let i = 0; i < fireballs.length; i ++ ) {
            if (fireballs[i] === this) {
                fireballs.splice(i, 1);
                break;
            }
        }
    }
}
class MultiPlayerSocket {
    constructor(playground) {
        this.playground = playground;

        this.ws = new WebSocket("wss://app1372.acapp.acwing.com.cn/wss/multiplayer/"); // 建立连接

        this.start();
    }

    start() {
        this.receive();
    }

    receive() {
        let outer = this;
        this.ws.onmessage = function(e) { // 在前端接受wss信息的函数
            let data = JSON.parse(e.data); // 将JSON变成字符串

            let uuid = data.uuid;
            if (uuid === outer.uuid) return false;

            let event = data.event;
            if (event === "create_player") {
                outer.receive_create_player(uuid, data.username, data.photo);
            } else if(event === "move_to") {
                outer.receive_move_to(uuid, data.tx, data.ty);
            } else if(event === "shoot_fireball") {
                outer.receive_shoot_fireball(uuid, data.tx, data.ty, data.ball_uuid);
            } else if(event === "attack") {
                outer.receive_attack(uuid, data.attackee_uuid, data.x, data.y, data.angle, data.damage, data.ball_uuid);
            } else if(event === "blink") {
                outer.receive_blink(uuid, data.tx, data.ty);
            } else if(event === "message") {
                outer.receive_message(uuid, data.username, data.text)
            } else if(event === "return") {
                outer.receive_return(uuid, data.username);
            }
        };
    }

    send_create_player(username, photo) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "create_player",
            'uuid': outer.uuid,
            'username': username,
            'photo': photo,
        }));
    }

    receive_create_player(uuid, username, photo) {
        let player = new Player(
            this.playground,
            this.playground.width / 2 / this.playground.scale,
            0.5,
            0.05,
            "white",
            0.15,
            "enemy",
            username,
            photo,
        );

        player.uuid = uuid;
        this.playground.players.push(player);
    }

    get_player(uuid) { // 通过uuid暴力查找player
        let players = this.playground.players;
        for (let i = 0; i < players.length; i ++ ) {
            let player = players[i];
            if(player.uuid === uuid) 
                return player;
        }

        return null;
    }

    send_move_to(tx, ty) { // 窗口向后端发送信息
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "move_to",
            'uuid': outer.uuid,
            'tx': tx,
            'ty': ty,
        }));
    }

    receive_move_to(uuid, tx, ty) { // 后端给前端发送消息需要接受函数
        let player = this.get_player(uuid);

        if(player) {
            player.move_to(tx, ty);
        }
    }

    send_shoot_fireball(tx, ty, ball_uuid) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "shoot_fireball",
            'uuid': outer.uuid,
            'tx': tx,
            'ty': ty,
            'ball_uuid': ball_uuid,
        }));
    }

    receive_shoot_fireball(uuid, tx, ty, ball_uuid ){ //需要知道是谁发射的，第一个uuid是发射火球人的uuid
        let player = this.get_player(uuid);

        if (player) {
            let fireball = player.shoot_fireball(tx, ty);
            fireball.uuid = ball_uuid;
        }
    }

    send_attack(attackee_uuid, x, y, angle, damage, ball_uuid) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "attack",
            'uuid': outer.uuid,
            'attackee_uuid': attackee_uuid,
            'x': x,
            'y': y,
            'angle': angle,
            'damage': damage,
            'ball_uuid': ball_uuid,
        }));
    }

    receive_attack(uuid, attackee_uuid, x, y, angle, damage, ball_uuid) {
        let attacker = this.get_player(uuid);
        let attackee = this.get_player(attackee_uuid);

        if (attacker && attackee) {
            attackee.receive_attack(x, y, angle, damage, ball_uuid, attacker);
        }
    }

    send_blink(tx, ty) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "blink",
            'uuid': outer.uuid,
            'tx': tx,
            'ty': ty,
        }));
    }

    receive_blink(uuid, tx, ty) {
        let player = this.get_player(uuid);

        if (player) {
            player.blink(tx, ty);
        }
    }

    send_message(username, text) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "message",
            'uuid': outer.uuid,
            'username': username,
            'text': text,
        }));
    }

    receive_message(uuid, username, text) {
            this.playground.chat_field.add_message(username, text);
    }

    send_return(username) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': "return",
            'uuid': outer.uuid,
            'username': username,
        }));
    }

    receive_return(uuid, username) {
        let text = `${username} 已经离开`;
        this.playground.chat_field.add_message(username, text);
    }
}
class AcGamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`<div class="ac-game-playground"></div>`);

        this.hide();
        this.root.$ac_game.append(this.$playground);
        this.start();
        this.player_count = 0;
    }


    get_random_color() {
        let color = ["blue", "red", "pink", "green", "grey"];
        return color[Math.floor(Math.random() * 5)];
    }

    create_uuid() {
        let res = "";
        for (let i = 0; i < 8; i ++ ) {
            let x = parseInt(Math.floor(Math.random() * 10)); // 返回[0,1)之间的数
            res += x;
        }
        return res;
    }

    start(){
        let outer = this;
        let uuid = this.create_uuid();
        $(window).on('resize.${uuid}', function(){
            outer.resize();
        });

        if (this.root.AcWingOS) {
            this.root.AcWingOS.api.window.on_close(function(){
                $(window).off('resize.${uuid}');
            });
        }
    }


    resize() {
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        let unit = Math.min(this.width / 16, this.height / 9);
        this.width = unit * 16;
        this.height = unit * 9;
        this.scale = this.height;

        if (this.game_map) {
            this.game_map.resize();
        }
    }

    show(mode, photo){ // 打开playground
        let outer = this;
        this.$playground.show();

        this.width = this.$playground.width();
        this.height = this.$playground.height();
        if (this.game_map) this.game_map = null;
        this.game_map = new GameMap(this);

        this.mode = mode;
        this.state = "waiting"; // waithing -> fighting
        this.notice_board = new NoticeBoard(this);
        this.score_board = new ScoreBoard(this);
        this.player_count = 0;
        this.resize();
        this.players = [];
        let num = [4, 6, 8];
        let num_id = this.root.choose_mode.cur_mode;
        if(mode === "multi mode") {
            this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.4, "me", this.root.settings.username, this.root.settings.photo));
        } else if(mode === "single mode") {
             this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.4, "me", this.root.settings.username, photo));
        }
        if (mode === "single mode") {
            for (let i = 0; i < num[num_id]; i ++ ) {
                let robot_photo = "https://app1372.acapp.acwing.com.cn/static/image/playground/choose_skin/yz.jpg";
                this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05,  "white", 0.4, "robot", null ,robot_photo));
            }
        } else if (mode === "multi mode") {
            this.chat_field = new ChatField(this);
            this.mps = new MultiPlayerSocket(this);
            this.mps.uuid = this.players[0].uuid;

            this.mps.ws.onopen = function() {
                outer.mps.send_create_player(outer.root.settings.username, outer.root.settings.photo);
            };
        }
    }

    hide(){
        while (this.players && this.players.length > 0) {
            this.players[0].destroy();
        }

        if (this.game_map) {
            this.game_map.destroy();
            this.game_map = null;
        }

        if (this.notice_board) {
            this.notice_board.destroy();
            this.notice_board = null;
        }

        if (this.score_board) {
            this.score_board.destroy();
            this.notice_board = null;
        }

        this.$playground.empty(); // 清空当前html对象

        this.$playground.hide()
    }
}
class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";
        this.username = "";
        this.photo = "";
        this.fireball_key = "81";
        this.blink_key = "70";
        this.$settings = $(`
<div class="ac-game-settings">
    <div class="ac-game-settings-login">
        <div class="ac-game-settings-title">
            登录
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="ac-game-settings-password">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="ac-game-settings-submit">
            <div class="ac-game-settings-item">
                <button>登录</button>
            </div>
        </div>
        <div class="ac-game-settings-error-message">
        </div>
        <div class="ac-game-settings-option">
            注册
        </div>
        <br>
        <div class="ac-game-settings-acwing">
            <img width="30" src="https://app1372.acapp.acwing.com.cn/static/image/settings/acwing_logo.png">
            <br>
            <div>
                AcWing一键登录
            </div>
        </div>
    </div>
    <div class="ac-game-settings-register">
        <div class="ac-game-settings-title">
            注册
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="ac-game-settings-password" ac-game-settings-password-first>
            <div class="ac-game-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="ac-game-settings-password ac-game-settings-password-second">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="确认密码">
            </div>
        </div>
        <div class="ac-game-settings-submit">
            <div class="ac-game-settings-item">
                <button>注册</button>
            </div>
        </div>
        <div class="ac-game-settings-error-message">
        </div>
        <div class="ac-game-settings-option">
            登录
        </div>
        <br>
        <div class="ac-game-settings-acwing">
            <img width="30" src="https://app1372.acapp.acwing.com.cn/static/image/settings/acwing_logo.png">
            <br>
            <div>
                AcWing一键登录
            </div>
        </div>
    </div>
</div>
`);
        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login_username = this.$login.find(".ac-game-settings-username input");
        this.$login_password = this.$login.find(".ac-game-settings-password input");
        this.$login_submit = this.$login.find(".ac-game-settings-submit button");
        this.$login_error_message = this.$login.find(".ac-game-settings-error-message");
        this.$login_register = this.$login.find(".ac-game-settings-option");

        this.$login.hide();

        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register_username = this.$register.find(".ac-game-settings-username input");
        this.$register_password = this.$register.find(".ac-game-settings-password input");
        this.$register_password_confirm = this.$register.find(".ac-game-settings-password-second input")
        this.$register_submit = this.$register.find(".ac-game-settings-submit button");
        this.$register_error_message = this.$register.find(".ac-game-settings-error-message")
        this.$register_login = this.$register.find(".ac-game-settings-option")

        this.$register.hide();

        this.$acwing_login = this.$settings.find(".ac-game-settings-acwing img");
        this.root.$ac_game.append(this.$settings);

        this.start();
    }

    start() {
        if (this.platform === "ACAPP") {
            this.getinfo_acapp();
        } else {
            this.getinfo_web();
            this.add_listening_events();
        }
    }

    add_listening_events() {
        let outer = this;
        this.add_listening_events_login();
        this.add_listening_events_register();

        this.$acwing_login.click(function () {
            outer.acwing_login();
        });
    }

    acwing_login() {
        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/acwing/web/apply_code",
            type: "GET",
            success: function (resp) {
                if (resp.result === "success") {
                    window.location.replace(resp.apply_code_url);
                }
            }
        });
    }

    add_listening_events_login() {
        let outer = this;
        this.$login_register.click(function () {
            outer.register();
        });
        this.$login_submit.click(function () {
            outer.login_on_remote();
        });
    }

    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function () {
            outer.login();
        });
        this.$register_submit.click(function () {
            outer.register_on_remote();
        });
    }

    login_on_remote() { // 在远程服务器上登录
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();

        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/login/",
            type: "GET",
            data: {
                username: username,
                password: password,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }

    register_on_remote() { // 在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();
        this.$register_error_message.empty();

        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/register/",
            type: "GET",
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    location.reload(); // 刷新
                } else {
                    outer.$register_error_message.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() { // 在远程服务器上登出
        if (this.platform === "ACAPP") {
            this.root.AcWingOS.api.window.close(); // ACAPP端点击退出关闭窗口
        } else {
            $.ajax({
                url: "https://app1372.acapp.acwing.com.cn/settings/logout/",
                type: "GET",
                success: function (resp) {
                    if (resp.result === "success") {
                        location.reload();
                    }
                }
            });
        }
    }

    login() { //打开登陆界面
        this.$register.hide();
        this.$login.show();
    }

    register() { //打开注册界面
        this.$login.hide();
        this.$register.show();
    }

    acapp_login(appid, redirect_uri, scope, state) {
        let outer = this;
        this.root.AcWingOS.api.oauth2.authorize(appid, redirect_uri, scope, state, function (resp) {
            if (resp.result === "success") {
                outer.username = resp.username;
                outer.photo = resp.photo;
                outer.hide();
                outer.root.menu.show();
            }
        });
    }
    getinfo_acapp() {
        let outer = this;
        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/acwing/acapp/apply_code",
            type: "GET",
            success: function (resp) {
                if (resp.result === "success") {
                    outer.acapp_login(resp.appid, resp.redirect_uri, resp.scope, resp.state);
                }
            }
        });
    }

    getinfo_web() {
        let outer = this;

        $.ajax({
            url: "https://app1372.acapp.acwing.com.cn/settings/getinfo/",
            type: "GET",
            data: {
                platform: outer.platform,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.fireball_key = resp.fireball_key;
                    outer.blink_key = resp.blink_key;
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        })
    }

    hide() {
        this.$settings.hide();
    }

    show() {
        this.$settings.show();
    }
}
export class AcGame{
    constructor(id, AcWingOS){
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;
        this.settings = new Settings(this);
        this.desc = new AcGameDesc(this);
        this.menu = new AcGameMenu(this);
        this.choose_mode = new AcGameChooseMode(this);
        this.choose_skin = new AcGameChooseSkin(this);
        this.playground = new AcGamePlayground(this);
        this.start();
    }
    start(){

    }
}
