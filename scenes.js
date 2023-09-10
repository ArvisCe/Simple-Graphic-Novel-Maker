function switch_scene(scene){
    switch(scene){
        case 0:
            buttons = [];
            buttons.push([1,"clickme"]);
            buttons.push([2,"clickme"]);
            buttons.push([3,"clickme"]);
            resetScreen("Narrator","Hello this is the narrator! Switch to scene: ",buttons);
            break;
        case 1:
            setScreenImage('image1.png');
            buttons = [];
            buttons.push([1,"clickme"]);
            buttons.push([2,"clickme"]);
            buttons.push([3,"clickme"]);
            resetScreen("Narrator","scene 1",buttons);
            break;
        case 2:
            setScreenImage('image2.png');
            buttons = [];
            buttons.push([1,"clickme"]);
            buttons.push([2,"clickme"]);
            buttons.push([3,"clickme"]);
            resetScreen("Narrator","scene 2",buttons);
            break;
        case 3:
            setScreenImage('image3.png');
            buttons = [];
            buttons.push([1,"clickme"]);
            buttons.push([2,"clickme"]);
            buttons.push([3,"clickme"]);
            resetScreen("Narrator","scene 3",buttons);
            break;
    }    
}