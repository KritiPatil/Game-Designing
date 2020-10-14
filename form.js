class Form{

    constructor() {

        this.input = createInput("Enter your Name");
        this.select = createSelect();
        this.radio = createRadio();
        this.button = createButton('Play');

        this.select.position(200, 200);
        this.select.option("Choose the Plant");
        this.select.option("Lemon Plant");
        this.select.option("Apple Plant");
        this.select.option("Tomatoe Plant");
        this.select.option("Strawberry Plant");

        this.radio.option('City');
        this.radio.option('Farm');
        this.radio.option('Valley');

    }

    display() {
        this.input.position(200, 180);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.select.hide();
            this.radio.hide();
            this.button.hide();

            var input = this.input.value();
            var select = this.select.value();
            var radio = this.radio.value();
            var inputRef = database.ref("Profile");
            inputRef.set({
                Name : input,
                Plant : select,
                Background : radio
            });
            database.ref("/").update({
                GameState : 1
            });
        });
    }

};