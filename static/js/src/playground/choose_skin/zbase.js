class ChooseSkin {
    constructor(playground) {
        this.playground = playground;
        this.$choose_skin = $(`
<div class="ac-game-choose-skin">
    <div class="ac-game-choose-skin-top">
        <div class="ac-game-choose-mode-top-left-triangle"></div>
        <div class="ac-game-choose-mode-top-right-triangle"></div>
    </div>
    <br/>
    <div class="ac-game-choose-skin-middle">
        <div class="ac-game-choose-skin-middle">
            随机人物
        </div>
    </div>
    <br/>
    <div class="ac-game-choose-skin-bottom">
        <div class="ac-game-choose-skin-bottom-submit">确认</div>
        <div class="ac-game-choose-skin-bottom-submit">返回</div>
    </div>
</div>
`)


    this.$choose_skin.show();
    this.$right_triangle = this.$choose_skin.find('.ac-game-choose-mode-top-right-triangle');
    this.$left_triangle = this.$choose_skin.find('.ac-game-choose-mode-top-left-triangle');

    this.playground.$playground.append(this.$choose_skin);


    this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events() {

    }

    show() {
        this.$choose_skin.show();
    }

    hide() {
        this.$choose_skin.hide();
    }
}
