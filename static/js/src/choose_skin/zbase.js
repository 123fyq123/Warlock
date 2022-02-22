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
