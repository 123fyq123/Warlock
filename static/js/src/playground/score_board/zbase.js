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
