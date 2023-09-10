function switch_scene(scene){
    switch(scene){
        case 0:
            buttons = [];
            buttons.push([1,"yes ( start )"]);
            buttons.push([1,"no ( start anyways )"]);
            resetScreen("Narrator","Hello, player! Would you like to start the adventure?",buttons);
            break;
        case 1:
            buttons = [];
            buttons.push([2,"wake up"]);
            buttons.push([3,"keep sleeping"]);
            resetScreen("Alarm clock","brr brr .. brr brr ..", buttons);
            break;
        case 2:
            buttons = [];
            buttons.push([3,"go back to sleep"]);
            resetScreen("You","Ugh I have no energy to do anything today!",buttons);
            break;
        case 3:
            buttons = [];
            resetScreen("Narrator","And so your adventure ended with you sleeping for 5 days and dying of dehydration.",buttons);
            break;
    }    
}