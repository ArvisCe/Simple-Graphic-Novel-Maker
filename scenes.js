
/* scene0 is the initial starting scene */
const scene0 = new Scene("Narrator" , "Hello player! Start the game?" , "scene0");
scene0.add_button(["scene1" , "yes"]);
scene0.switch_scene();
create_scene(scene0);

/* this is an example of how to create the next scene */
/* scene1 on the left side is the variable and on the right side scene1 is the name of the scene
that the progras recognises when creating a button */

const scene1 = new Scene("Narrator","You woke up!","scene1");
scene1.add_button(["scene2","go back to sleep"]);
scene1.add_button(["scene3", "wash teeth"]);
create_scene(scene1);

const scene2 = new Scene("Narrator","You sleep for 5 days and die of dehydration","scene2");
create_scene(scene2);

const scene3 = new Scene("You","Eh I don't feel like washing my teeth");
scene3.add_button(["scene2","go to sleep"]);
create_scene(scene3);