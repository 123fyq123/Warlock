class AcGamePlayground {
    constructor(root) {
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
        for (let i = 0; i < 8; i++) {
            let x = parseInt(Math.floor(Math.random() * 10)); // 返回[0,1)之间的数
            res += x;
        }
        return res;
    }

    start() {
        let outer = this;
        let uuid = this.create_uuid();
        $(window).on('resize.${uuid}', function () {
            outer.resize();
        });

        if (this.root.AcWingOS) {
            this.root.AcWingOS.api.window.on_close(function () {
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

    show(mode, photo) { // 打开playground
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
        if (mode === "multi mode") {
            this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.4, "me", this.root.settings.username, this.root.settings.photo));
        } else if (mode === "single mode") {
            this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.4, "me", this.root.settings.username, photo));
        }
        if (mode === "single mode") {
            for (let i = 0; i < num[num_id]; i++) {
                let robot_photo = "https://fyqcode.top/static/image/playground/choose_skin/yz.jpg";
                this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.4, "robot", null, robot_photo));
            }
        } else if (mode === "multi mode") {
            this.chat_field = new ChatField(this);
            this.mps = new MultiPlayerSocket(this);
            this.mps.uuid = this.players[0].uuid;

            this.mps.ws.onopen = function () {
                outer.mps.send_create_player(outer.root.settings.username, outer.root.settings.photo);
            };
        }
    }

    hide() {
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
