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
