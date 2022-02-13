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
        </div>
    </div>
</div>
            `);

        this.$desc.hide();
        this.root.$ac_game.append(this.$desc);
        this.start();
    }

    start(){
    }

    show() {
        this.$desc.show();
    }
}
