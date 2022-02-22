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
