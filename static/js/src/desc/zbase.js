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
            <p>一位计算机专业学生的第一个项目</p>
            <p>一款类似于球球大作战的游戏</p>
            <p>感谢Y总带我入坑~</p>
            <p>希望大家多多支持！</p>
            <p>目前仍在持续开发种</p>
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
