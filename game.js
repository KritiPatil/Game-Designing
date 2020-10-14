class Game{
    constructor() {

    }

play() {
    var backgroundName, playerName, plantName;
    database.ref("Profile").on("value", function(data) {
        var response = data.val();
        console.log(response);
        backgroundName = response.Background;
        playerName = response.Name;
        plantName = response.Plant;
    });

    switch(backgroundName) {

        case "city" : 

    }

}
};