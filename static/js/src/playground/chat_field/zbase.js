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
